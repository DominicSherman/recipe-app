import React from 'react';
import DraftEditor from '@draft-js-plugins/editor';

import { plugins } from './plugins';
import { handleKeyCommand } from './utils';

const Editor = React.forwardRef(
  ({ onChange, editorState }: { onChange: any; editorState: any }, ref) => {
    return (
      <DraftEditor
        editorKey="SimpleInlineToolbarEditor"
        editorState={editorState}
        handleKeyCommand={(command, editorState) =>
          handleKeyCommand(command, editorState, onChange)
        }
        onChange={onChange}
        plugins={plugins}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        ref={ref}
      />
    );
  }
);

export default Editor;
