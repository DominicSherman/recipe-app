import { useEditorContext } from './editor-context';
import { useRecipe } from './hooks';

export const Title = () => {
  const { isEditing, editingTitle, setEditingTitle } = useEditorContext();
  const { title } = useRecipe();

  return (
    <>
      {isEditing ? (
        <input
          className="text-5xl text-primary font-extrabold rounded-md flex justify-center w-full h-16 text-center p-2 my-2"
          onChange={(e) => setEditingTitle(e.target.value)}
          value={editingTitle}
        />
      ) : (
        <h1 className="text-5xl text-primary h-16 text-center self-center p-2 my-2">
          {title}
        </h1>
      )}
      <div className="hr" />
    </>
  );
};
