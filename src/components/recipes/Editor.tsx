import DraftEditor from '@draft-js-plugins/editor';
import React from 'react';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import { useEditorContext } from './editor-context';
import { useSetEditingRecipeInfo } from './hooks';
import { useHandleKeyCommand, useKeybindingFunction } from './keybindings';
import { plugins, Toolbar, Separator } from './plugins';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BoldButton,
  ItalicButton,
  UnorderedListButton,
  OrderedListButton,
  HeadlineThreeButton,
} from '@draft-js-plugins/buttons';

export const Editor = () => {
  const { editorState, onChange, editorRef } = useEditorContext();
  const handleKeyCommand = useHandleKeyCommand();
  const keybindingFunction = useKeybindingFunction();

  useSetEditingRecipeInfo();

  return (
    <div className="editor">
      <DraftEditor
        editorKey="SimpleInlineToolbarEditor"
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keybindingFunction}
        onChange={onChange}
        plugins={plugins}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={editorRef}
      />
      <Toolbar>
        {(externalProps) => (
          <>
            <HeadlineOneButton {...externalProps} />
            <HeadlineTwoButton {...externalProps} />
            <HeadlineThreeButton {...externalProps} />
            <Separator />
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <Separator />
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
          </>
        )}
      </Toolbar>
      <style jsx>{`
        .editor :global(.public-DraftEditor-content) {
          min-height: 500px;
        }
      `}</style>
    </div>
  );
};
