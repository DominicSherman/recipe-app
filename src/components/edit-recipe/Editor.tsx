import DraftEditor from '@draft-js-plugins/editor';
import React from 'react';

import { useEditorContext } from './editor-context';
import {
  useDefaultDraftState,
  useHandleKeyCommand,
  useRecipe,
  useSetEditingRecipeTitle,
} from './hooks';
import { plugins } from './plugins';

export const Editor = () => {
  const { editorState, onChange, editorRef } = useEditorContext();
  const handleKeyCommand = useHandleKeyCommand();
  const recipe = useRecipe();

  useSetEditingRecipeTitle(recipe.title);
  useDefaultDraftState(recipe.text);

  return (
    <DraftEditor
      editorKey="SimpleInlineToolbarEditor"
      editorState={editorState}
      handleKeyCommand={handleKeyCommand}
      onChange={onChange}
      plugins={plugins}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={editorRef}
    />
  );
};
