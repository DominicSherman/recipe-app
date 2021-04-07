import {
  convertFromRaw,
  EditorState
} from 'draft-js';
import { useGetRecipeQuery } from 'graphql-codegen';
import { useEffect } from 'react';
import { useRouterId } from 'utils';

import { useEditorContext } from './editor-context';

/* TO DO
export const useLoadFromLocalStorage = (recipeId) => {
  const { setEditorState } = useEditorContext();

  useEffect(() => {
    if (recipeId) {
      const storeRaw = window.localStorage.getItem(`draft-${recipeId}`);

      const content = storeRaw
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(storeRaw)))
        : createEditorStateWithText('');

      setEditorState(content);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);
};

export const useSetLocalStorage = (recipeId) => {
  const { editorState } = useEditorContext();

  useEffect(() => {
    if (recipeId) {
      const contentState = editorState.getCurrentContent();
      const rawContent = convertToRaw(contentState);
      window.localStorage.setItem(
        `draft-${recipeId}`,
        JSON.stringify(rawContent)
      );
    }
  }, [editorState, recipeId]);
}; 
*/

export const useDefaultDraftState = (text) => {
  const { setEditorState } = useEditorContext();

  useEffect(() => {
    if (text) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(text)))
      );
    }
  }, [text, setEditorState]);
};

export const useSetEditingRecipeTitle = (recipeTitle) => {
  const { setEditingTitle, editingTitle } = useEditorContext();

  useEffect(() => {
    if (recipeTitle && recipeTitle !== editingTitle) {
      setEditingTitle(recipeTitle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeTitle, setEditingTitle]);
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
