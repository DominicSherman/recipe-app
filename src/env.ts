export enum Env {
  LOCALHOST = 'development',
  DEV = 'preview',
  PROD = 'production',
}

export const getEnv = (): Env => {
  return (process.env.NEXT_PUBLIC_VERCEL_ENV as Env) || Env.DEV;
};

export const isProduction = (): boolean => getEnv() === Env.PROD;
