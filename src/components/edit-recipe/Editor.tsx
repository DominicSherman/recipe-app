import DraftEditor from '@draft-js-plugins/editor';
import React from 'react';

import { useEditorContext } from './editor-context';
import {
  useDefaultDraftState,
  useRecipe,
  useSetEditingRecipeTitle,
} from './hooks';
import {useHandleKeyCommand, useKeybindingFunction} from './keybindings';
import { plugins } from './plugins';

export const Editor = () => {
  const { editorState, onChange, editorRef } = useEditorContext();
  const handleKeyCommand = useHandleKeyCommand();
  const keybindingFunction = useKeybindingFunction();
  const recipe = useRecipe();

  useSetEditingRecipeTitle(recipe.title);
  useDefaultDraftState(recipe.text);

  return (
    <DraftEditor
      editorKey="SimpleInlineToolbarEditor"
      editorState={editorState}
      keyBindingFn={keybindingFunction}
      handleKeyCommand={handleKeyCommand}
      onChange={onChange}
      plugins={plugins}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={editorRef}
    />
  );
};
