import { useState } from 'react';
import { useS3Upload } from 'next-s3-upload';

import { useEditorContext } from './editor-context';
import { useRecipe } from './hooks';
import { Button } from 'components/generic';

export const RecipeHeader = () => {
  const { isEditing, setEditingField, editingFields } = useEditorContext();
  const recipe = useRecipe();
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (file) => {
    setLoading(true);

    const { url } = await uploadToS3(file);

    setLoading(false);
    setEditingField('headerImageUrl', url);
  };

  if (isEditing) {
    return (
      <>
        <FileInput onChange={handleFileChange} />
        <Button className="btn-tertiary" onClick={openFileDialog}>
          Upload Image
        </Button>
        {editingFields.headerImageUrl ? (
          <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
            <img
              alt="recipe"
              className="w-full h-full object-cover"
              src={editingFields.headerImageUrl}
            />
          </div>
        ) : null}
        {loading ? (
          <div>
            <p>loading...</p>
          </div>
        ) : null}
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
        src={recipe.headerImageUrl}
      />
    </div>
  );
};
