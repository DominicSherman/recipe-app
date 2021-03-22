import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async session(session, user) {
  //     console.log('user', user);

  //     return {
  //       ...session,
  //       user: {
  //         id: user.sub,
  //         ...user,
  //       },
  //     };
  //   },
  //   async jwt(token, user, account) {
  //     console.log('account', account);

  //     if (account?.accessToken) {
  //       token.accessToken = account.accessToken;
  //     }

  //     return token;
  //   },
  // },
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
});
