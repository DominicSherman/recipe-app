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
  const { editingFields, setEditingFields } = useEditorContext();
  const recipe = useRecipe();

  useEffect(() => {
    if (editingFields.shouldSet) {
      setEditingFields({
        shouldSet: false,
        title: recipe.title || '',
        description: recipe.description || '',
        cookTime: recipe.cookTime || '',
        headerImageUrl: recipe.headerImageUrl || '',
        serveCount: recipe.serveCount || '',
      });
    }
  }, [editingFields.shouldSet, recipe, setEditingFields]);
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
