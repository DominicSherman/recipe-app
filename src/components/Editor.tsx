import 'draft-js/dist/Draft.css';

import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import DraftEditor, {
  createEditorStateWithText,
} from '@draft-js-plugins/editor';
import { RichUtils } from 'draft-js';
import createMarkdownPlugin from 'draft-js-markdown-shortcuts-plugin';
import { useEffect, useRef, useState } from 'react';

const plugins = [createMarkdownPlugin()];

const Editor = () => {
  const [editorState, setEditorState] = useState(createEditorStateWithText(''));

  const onChange = (state) => {
    setEditorState(state);
  };

  useEffect(() => {
    const storeRaw = window.localStorage.getItem('rawContent');

    const content = storeRaw
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(storeRaw)))
      : createEditorStateWithText('');

    setEditorState(content);
  }, []);

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    window.localStorage.setItem('rawContent', JSON.stringify(rawContent));
  }, [editorState]);

  const editorRef = useRef<DraftEditor | null>();

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);

      return 'handled';
    }

    return 'not-handled';
  };

  const focus = () => editorRef.current?.focus();

  return (
    <div className="mt-8 w-full">
      <div className="bg-white p-4 min-h-[600px] cursor-text" onClick={focus}>
        <DraftEditor
          editorKey="SimpleInlineToolbarEditor"
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
          placeholder={'Add recipe here...'}
          plugins={plugins}
          ref={(element) => {
            editorRef.current = element;
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
