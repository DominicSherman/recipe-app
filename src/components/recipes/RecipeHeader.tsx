import { useS3Upload } from 'next-s3-upload';

import { useEditorContext } from './editor-context';
import { useRecipe } from './hooks';
import { Button } from 'components/generic';

export const RecipeHeader = () => {
  const { isEditing } = useEditorContext();
  const recipe = useRecipe();
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = async (file) => {
    console.log('file', file);
    const { url } = await uploadToS3(file);

    console.log('url', url);
  };

  if (isEditing) {
    return (
      <>
        <FileInput onChange={handleFileChange} />
        <Button className="btn-tertiary" onClick={openFileDialog}>
          Upload Image
        </Button>
      </>
    );
  }

  if (!recipe.headerImageUrl) {
    return null;
  }

  return (
    <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
      <img
        alt="recipe"
        className="w-full h-full object-cover"
        src="/header-image.jpg"
      />
    </div>
  );
};
