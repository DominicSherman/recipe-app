import { PrismaClient, User } from '@prisma/client';
import { Context as ApolloContext } from 'apollo-server-core';
import { IncomingMessage } from 'http';
import jwt from 'next-auth/jwt';

import { prisma } from '../lib/prisma';

/**
 * Populates a context object for use in resolvers.
 * If there is a valid auth token in the authorization header, it will add the user to the context
 * @param context context from apollo server
 */
export async function createContext(
  context: ApolloApiContext
): Promise<Context> {
  const token = await jwt.getToken({
    req: context.req,
    secret: process.env.JWT_SECRET,
  });

  let user: User | null = null;

  if (token) {
    user = await prisma.user.findUnique({
      where: { id: Number(token.userId) },
    });
  }

  return {
    db: prisma,
    prisma,
    user,
  };
}

type ApolloApiContext = ApolloContext<{ req: IncomingMessage }>;

export type Context = {
  db: PrismaClient;
  prisma: PrismaClient;
  user: User | null;
};
