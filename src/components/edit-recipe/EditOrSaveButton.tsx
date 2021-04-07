import { Button } from 'components';
import { useUserId } from 'utils';

import { useRecipe } from './hooks';
import { useEditorContext } from './editor-context';

const EditButton = () => {
  const { onEdit } = useEditorContext();

  return (
    <button className="btn" onClick={onEdit}>
      Edit
    </button>
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
      <button className="btn-secondary mr-4" onClick={onCancel}>
        Cancel
      </button>
      <Button
        className="btn"
        disabled={!recipeHasChanged}
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
