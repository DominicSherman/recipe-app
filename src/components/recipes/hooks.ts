import { useGetRecipeQuery } from 'graphql-codegen';
import { useEffect } from 'react';
import { useRouterId } from 'utils';

import { useEditorContext } from './editor-context';
import { convertDraftStateToString, convertStringToDraftState } from './utils';

export const useEditorPersistence = () => {
  const [id] = useRouterId();

  const {
    editorState,
    isEditing,
    setEditorState,
    setIsEditing,
  } = useEditorContext();

  const key = `draft-${id}`;

  useEffect(() => {
    if (id && isEditing) {
      window.localStorage.setItem(key, convertDraftStateToString(editorState));
    }
  }, [id, isEditing, editorState, key]);

  useEffect(() => {
    if (id) {
      const draftState = window.localStorage.getItem(key);

      if (draftState) {
        setEditorState(convertStringToDraftState(draftState));
        setIsEditing(true);
      }
    }
  }, [id, key, setEditorState, setIsEditing]);
};

export const useSetEditingRecipeInfo = () => {
  const {
    setEditingTitle,
    editingTitle,
    setEditingCookTime,
    editingCookTime,
    setEditingDescription,
    editingDescription,
  } = useEditorContext();
  const { cookTime, description, title } = useRecipe();

  useEffect(() => {
    if (title && title !== editingTitle) {
      setEditingTitle(title);
    }

    if (cookTime && cookTime !== editingCookTime) {
      setEditingCookTime(cookTime);
    }

    if (description && description !== editingDescription) {
      setEditingDescription(description);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    title,
    setEditingTitle,
    cookTime,
    setEditingCookTime,
    description,
    setEditingDescription,
  ]);
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
      headerImageUrl: null,
      serveCount: null,
      cookTime: null,
      description: null,
      title: '',
      text: '',
      userId: '',
    };
  }

  return data.recipe;
};
