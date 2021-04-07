import { createEditorStateWithText } from '@draft-js-plugins/editor';
import { useUpdateRecipeMutation } from 'graphql-codegen';
import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { useRouterId } from 'utils';
import { useRecipe } from './hooks';
import { convertDraftStateToString, convertStringToDraftState } from './utils';

const EditorContext = React.createContext<{
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
  editingTitle: string;
  setEditingTitle: (v: string) => void;
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
  editingTitle: '',
  setEditingTitle: () => ({}),
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
  const [editingTitle, setEditingTitle] = useState('');
  const [editorState, setEditorState] = useState(createEditorStateWithText(''));
  const editorRef = useRef<any | null>();
  const editorStateAsString = convertDraftStateToString(editorState);
  const recipe = useRecipe();

  const recipeHasChanged =
    editorStateAsString !== recipe.text || editingTitle !== recipe.title;

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

      const titleProp = editingTitle ? { title: { set: editingTitle } } : {};

      updateRecipe({
        variables: {
          data: {
            ...titleProp,
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

  const value = {
    isEditing,
    setIsEditing,
    editingTitle,
    setEditingTitle,
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
