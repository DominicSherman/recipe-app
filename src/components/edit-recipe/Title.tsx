import { useEditorContext } from './context';
import { useRecipe } from './hooks';

export const Title = () => {
  const { isEditing, editingTitle, setEditingTitle } = useEditorContext();
  const { title } = useRecipe();

  if (isEditing) {
    return (
      <input
        className="text-5xl text-primary font-extrabold rounded-md flex justify-center w-full h-16 text-center p-2 mb-4"
        onChange={(e) => setEditingTitle(e.target.value)}
        value={editingTitle}
      />
    );
  }

  return (
    <h1 className="text-5xl text-primary h-16 text-center self-center p-2 mb-4">
      {title}
    </h1>
  );
};
