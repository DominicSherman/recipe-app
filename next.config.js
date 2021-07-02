module.exports = {
  env: {
    ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_APPLICATION_ID,
    ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
  images: {
    domains: [`${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`],
  },
};
