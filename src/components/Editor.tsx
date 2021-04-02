import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import DraftEditor, {
  createEditorStateWithText,
} from '@draft-js-plugins/editor';
import { RichUtils } from 'draft-js';
import createMarkdownPlugin from 'draft-js-markdown-shortcuts-plugin';
import { useEffect, useRef, useState } from 'react';

const plugins = [createMarkdownPlugin()];

const Editor = ({ onSave }) => {
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
    <>
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
      <button
        className="btn absolute top-4 right-4 z-10"
        onClick={() =>
          onSave(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
        }
      >
        Save
      </button>
    </>
  );
};

export default Editor;
