import { APIRoute } from 'next-s3-upload';

export default APIRoute.configure({
  key(req, filename) {
    console.log('req', req);

    return `${filename.toUpperCase()}`;
  },
});
