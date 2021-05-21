import { useRecipe } from 'components';
import { useEditorContext } from './editor-context';

export const RecipeInfo = () => {
  const {
    isEditing,
    editingDescription,
    editingCookTime,
    setEditingDescription,
    setEditingCookTime,
  } = useEditorContext();
  const recipe = useRecipe();

  return (
    <div className="p-4 flex flex-col items-center">
      {isEditing ? (
        <>
          <h4>Description</h4>
          <input
            className="text-2xl text-primary font-medium rounded-md flex justify-center w-full h-10 text-center p-2 my-2"
            onChange={(e) => setEditingDescription(e.target.value)}
            value={editingDescription}
          />
          <p className="flex flex-row items-center">
            {`Cook time: `}
            <input
              className="rounded-md w-20 ml-4 px-2"
              onChange={(e) => setEditingCookTime(e.target.value)}
              value={editingCookTime}
            />
          </p>
          <div className="hr" />
        </>
      ) : (
        <>
          {recipe.description ? <h4>{recipe.description}</h4> : null}
          <p>{`Cook time: ${recipe.cookTime || 'N/A'}`}</p>
          <div className="hr" />
        </>
      )}
    </div>
  );
};
