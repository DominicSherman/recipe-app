import { getEnv } from './../env';
import { PASSWORD_PROTECT } from 'enums/options';
import { NextPageContext } from 'next';
import nextCookie from 'next-cookies';

export const passwordProtect = (ctx: NextPageContext): void => {
  if (PASSWORD_PROTECT.includes(getEnv())) {
    const EXCLUDED_ROUTES = ['/app-login'];
    const { req, res } = ctx;
    const currentRoute = req?.url || '';
    const { password } = nextCookie(ctx);

    if (
      !EXCLUDED_ROUTES.includes(currentRoute) &&
      (!password || password !== process.env.PASSWORD)
    ) {
      if (res) {
        res.writeHead(302, {
          Location: '/app-login',
        });

        res.end();
      }
    }
  }
};
