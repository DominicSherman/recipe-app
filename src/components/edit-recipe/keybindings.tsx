import {
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils
} from 'draft-js';
import {KeyboardEvent, useEffect} from 'react';

import { useEditorContext } from './editor-context';
import {useRecipe} from './hooks';

const {hasCommandModifier} = KeyBindingUtil;

enum KeybindingKeys {
  save = 'save',
  cancel = 'cancel',
  edit = 'edit',
}

const isSave = (e) => e.key === 's' && hasCommandModifier(e);

const isCancel = (e) => e.key === 'Escape';

const isEdit = (e) => e.key === 'e' && hasCommandModifier(e);

const useKeybindingToFunction = () => {
  const { onSave, onCancel, onEdit } = useEditorContext();

  const keybindingToFunction = {
    [KeybindingKeys.save]: onSave,
    [KeybindingKeys.cancel]: onCancel,
    [KeybindingKeys.edit]: onEdit,
  }

  const getFunctionFromKeybinding = (keybinding: KeybindingKeys) => {
    return () => {
      const func = keybindingToFunction[keybinding];

      if (func) {
        func();
      }
    }
  }

  return getFunctionFromKeybinding;
};

export const useHandleKeyCommand = () => {
  const { onChange } = useEditorContext();
  const getFunctionFromKeybinding = useKeybindingToFunction();

  const handleKeyCommand = (command, editorState) => {
    if (Object.values(KeybindingKeys).includes(command)) {
      getFunctionFromKeybinding(command)();

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
    if (isSave(e)) {
      return KeybindingKeys.save;
    }

    if (isCancel(e)) {
      return KeybindingKeys.cancel;
    }

    return getDefaultKeyBinding(e);
  };

  return keybindingFunction;
};

export const useGlobalKeybindings = () => {
  const recipe = useRecipe();
  const getFunctionFromKeybinding = useKeybindingToFunction();

  useEffect(() => {
    const handleKeyPress = (e): boolean => {
      if (isEdit(e)) {
        getFunctionFromKeybinding(KeybindingKeys.edit)();

        return true;
      }
      
      return false;
    };

    document.addEventListener('keydown', (e) => {
      const handled = handleKeyPress(e);

      if (handled) {
        e.preventDefault();
      }
    });

    return (): void => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [recipe]);
};