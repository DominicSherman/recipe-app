import {
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils
} from 'draft-js';
import {KeyboardEvent} from 'react';

import { useEditorContext } from './editor-context';

const {hasCommandModifier} = KeyBindingUtil;

enum KeybindingKeys {
  save = 'save',
  cancel = 'cancel',
}

export const useHandleKeyCommand = () => {
  const { onChange, onSave, onCancel } = useEditorContext();

  const keybindingToFunction = {
    [KeybindingKeys.save]: onSave,
    [KeybindingKeys.cancel]: onCancel,
  }

  const handleKeyCommand = (command, editorState) => {
    if (Object.values(KeybindingKeys).includes(command)) {
      const func = keybindingToFunction[command];

      if (func) {
        func();
      }

      return 'handled';
    }

    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);

      return 'handled';
    }

    return 'not-handled';
  };

  return handleKeyCommand;
};

export const useKeybindingFunction = () => {
  const keybindingFunction = (e: KeyboardEvent<Element>) => {
    if (e.key === 's' && hasCommandModifier(e)) {
      return KeybindingKeys.save;
    }

    if (e.key === 'Escape') {
      return KeybindingKeys.cancel;
    }

    return getDefaultKeyBinding(e);
  };

  return keybindingFunction;
};