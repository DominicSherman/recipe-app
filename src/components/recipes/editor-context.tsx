import { createEditorStateWithText } from '@draft-js-plugins/editor';
import { useUpdateRecipeMutation } from 'graphql-codegen';
import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { useRouterId } from 'utils';
import { useRecipe } from './hooks';
import { convertDraftStateToString, convertStringToDraftState } from './utils';

const defaultEditingFields = {
  title: '',
  description: '',
  cookTime: '',
  headerImageUrl: '',
  serveCount: '',
};

const EditorContext = React.createContext<{
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
  editingFields: {
    title: string;
    description: string;
    cookTime: string;
    headerImageUrl: string;
    serveCount: string;
  };
  setEditingField: (key: string, value: string) => void;
  editorState: any;
  setEditorState: (v: any) => void;
  editorRef: any | null;
  onChange: (v: any) => void;
  focus: () => void;
  recipeHasChanged: boolean;
  saveLoading: boolean;
  onSave: () => void;
  onCancel: () => void;
  onEdit: () => void;
}>({
  isEditing: false,
  setIsEditing: () => ({}),
  editingFields: defaultEditingFields,
  setEditingField: () => ({}),
  editorState: createEditorStateWithText(''),
  setEditorState: () => ({}),
  editorRef: null,
  onChange: () => ({}),
  focus: () => ({}),
  recipeHasChanged: false,
  saveLoading: false,
  onSave: () => ({}),
  onCancel: () => ({}),
  onEdit: () => ({}),
});

export const EditorProvider = ({ children }) => {
  const [id] = useRouterId();
  const [isEditing, setIsEditing] = useState(false);
  const [editingFields, setEditingFields] = useState(defaultEditingFields);
  const [editorState, setEditorState] = useState(createEditorStateWithText(''));
  const editorRef = useRef<any | null>();
  const editorStateAsString = convertDraftStateToString(editorState);
  const recipe = useRecipe();
  const recipeTextHasChanged = editorStateAsString !== recipe.text;

  const recipeHasChanged = recipeTextHasChanged;

  const [updateRecipe, { loading: saveLoading }] = useUpdateRecipeMutation({
    onError: (error) => {
      console.log('error', error);
    },
    onCompleted: () => {
      setIsEditing(false);
    },
  });

  const onChange = (value) => {
    setEditorState(value);
  };

  const focus = () => editorRef.current?.focus();

  const onSave = () => {
    if (recipeHasChanged) {
      window.localStorage.removeItem(`draft-${id}`);

      // console.log({ editingDescription });
      // const titleProp = editingTitle ? { title: { set: editingTitle } } : {};
      // const cookTimeProp = editingCookTime
      //   ? { cookTime: { set: editingCookTime } }
      //   : {};
      // const descriptionProp = editingDescription
      //   ? { description: { set: editingDescription } }
      //   : {};

      updateRecipe({
        variables: {
          data: {
            // ...titleProp,
            // ...cookTimeProp,
            // ...descriptionProp,
            text: {
              set: convertDraftStateToString(editorState),
            },
          },
          where: {
            id,
          },
        },
      });
    }
  };

  const onCancel = () => {
    window.localStorage.removeItem(`draft-${id}`);

    setIsEditing(false);
  };

  const onEdit = () => {
    if (recipe.text) {
      setEditorState(convertStringToDraftState(recipe.text));
    }

    setIsEditing(true);
    setTimeout(focus, 50);
  };

  const setEditingField = (key: string, value: string) => {
    setEditingFields({
      ...editingFields,
      [key]: value,
    });
  };

  const value = {
    isEditing,
    setIsEditing,
    editingFields,
    setEditingField,
    editorState,
    setEditorState,
    editorRef,
    onChange,
    focus,
    saveLoading,
    onCancel,
    onSave,
    onEdit,
    recipeHasChanged,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
