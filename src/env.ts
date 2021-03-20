export enum Env {
  LOCALHOST = 'localhost',
  DEV = 'development',
  PROD = 'production',
}

export const getEnv = (): Env => (process.env.ENV as Env) || Env.DEV;

export const isProduction = (): boolean => getEnv() === Env.PROD;
