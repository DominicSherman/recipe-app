import { RichUtils } from 'draft-js';

export const handleKeyCommand = (command, editorState, onChange) => {
  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState) {
    onChange(newState);

    return 'handled';
  }

  return 'not-handled';
};
