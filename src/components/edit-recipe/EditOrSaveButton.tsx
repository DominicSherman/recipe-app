import { useRecipe, convertDraftStateToString } from '.';
import { useRouterId, useUserId } from 'utils';
import { useEditorContext } from './context';
import { useUpdateRecipeMutation } from 'graphql-codegen';

const EditButton = () => {
  const { setIsEditing } = useEditorContext();

  return (
    <button
      className="absolute top-4 right-4 btn"
      onClick={() => setIsEditing(true)}
    >
      Edit
    </button>
  );
};

const SaveButton = () => {
  const { editingTitle, editorState, setIsEditing } = useEditorContext();
  const [id] = useRouterId();

  const [updateRecipe] = useUpdateRecipeMutation({
    onError: (error) => {
      console.log('error', error);
    },
    onCompleted: () => {
      setIsEditing(false);
    },
  });

  return (
    <button
      className="btn absolute top-4 right-4 z-10"
      onClick={() => {
        const titleProp = editingTitle ? { title: { set: editingTitle } } : {};

        updateRecipe({
          variables: {
            data: {
              ...titleProp,
              text: {
                set: convertDraftStateToString(editorState),
              },
            },
            where: {
              id,
            },
          },
        });
      }}
    >
      Save
    </button>
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

  if (!isEditing) {
    return <EditButton />;
  }

  return <SaveButton />;
};
