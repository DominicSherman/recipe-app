import { useGetRecipeQuery } from 'graphql-codegen';
import { useEffect } from 'react';
import { useRouterId } from 'utils';

import { useEditorContext } from './editor-context';
import { convertDraftStateToString, convertStringToDraftState } from './utils';

export const useEditorPersistence = () => {
  const [id] = useRouterId();
  const {editorState, isEditing, setEditorState, setIsEditing} = useEditorContext();
  const {text} = useRecipe();
  const key = `draft-${id}`;

  useEffect(() => {
    if (id && isEditing) {
      window.localStorage.setItem(key, convertDraftStateToString(editorState));
    }
  }, [id, isEditing, editorState]);

  useEffect(() => {
    if (id) {
      const draftState = window.localStorage.getItem(key);

      if (draftState) {
        setEditorState(convertStringToDraftState(draftState));
        setIsEditing(true);
      }
    }
  }, [id]);
};


export const useSetEditingRecipeTitle = () => {
  const { setEditingTitle, editingTitle } = useEditorContext();
  const {title} = useRecipe();

  useEffect(() => {
    if (title && title !== editingTitle) {
      setEditingTitle(title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, setEditingTitle]);
};

export const useRecipe = () => {
  const [recipeId] = useRouterId();

  const { data } = useGetRecipeQuery({
    variables: {
      where: {
        id: recipeId,
      },
    },
  });

  if (!data?.recipe) {
    return {
      title: '',
      text: '',
      userId: '',
    };
  }

  return data.recipe;
};
