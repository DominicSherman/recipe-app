import { useState } from 'react';
import { useS3Upload } from 'next-s3-upload';

export default function UploadTest() {
  const [imageUrl, setImageUrl] = useState();
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = async (file) => {
    console.log('file', file);
    const { url } = await uploadToS3(file, { foo: 'foo' });

    console.log('url', url);
    setImageUrl(url);
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button onClick={openFileDialog}>Upload file</button>

      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}
