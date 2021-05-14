import { Button, Tooltip } from 'components';
import { useUserId } from 'utils';

import { useEditorContext } from './editor-context';
import { useRecipe } from './hooks';

const EditButton = () => {
  const { onEdit } = useEditorContext();

  return (
    <Button
      className="btn :group-hover:flex"
      keyboardShortcut="⌘E"
      onClick={onEdit}
    >
      Edit
    </Button>
  );
};

const SaveButton = () => {
  const {
    recipeHasChanged,
    saveLoading,
    onSave,
    onCancel,
  } = useEditorContext();

  return (
    <>
      <Button
        className="btn-secondary mr-4"
        keyboardShortcut="Esc"
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        className="btn"
        disabled={!recipeHasChanged}
        keyboardShortcut="⌘S"
        loading={saveLoading}
        onClick={onSave}
      >
        Save
      </Button>
    </>
  );
};

export const EditOrSaveButton = () => {
  const { isEditing } = useEditorContext();
  const userId = useUserId();
  const recipe = useRecipe();
  const userOwnsRecipe = Number(userId) === recipe.userId;

  if (!userOwnsRecipe) {
    return null;
  }

  return (
    <div className="absolute top-3 right-0 z-10 flex flex-row">
      {!isEditing ? <EditButton /> : <SaveButton />}
    </div>
  );
};
