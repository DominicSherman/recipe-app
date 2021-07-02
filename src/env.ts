export enum Env {
  LOCALHOST = 'development',
  DEV = 'preview',
  PROD = 'production',
}

export const getEnv = (): Env => {
  console.log({ foo: process.env.VERCEL_ENV });

  return (process.env.VERCEL_ENV as Env) || Env.DEV;
};

export const isProduction = (): boolean => getEnv() === Env.PROD;
