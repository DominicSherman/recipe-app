import { APIRoute } from 'next-s3-upload';

export default APIRoute.configure({
  key(req, filename, additionalData?: { id: string }) {
    console.log({ additionalData });

    return `recipes/${additionalData?.id}/${filename.toUpperCase()}`;
  },
});
