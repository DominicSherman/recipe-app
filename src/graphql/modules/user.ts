import { arg, extendType, nonNull, objectType } from 'nexus';
import { User as PrismaUser } from 'nexus-prisma';

import { UserWhereUniqueInput } from './nexus-types';

export const User = objectType({
  name: PrismaUser.$name,
  description: PrismaUser.$description,
  definition(t) {
    t.field(PrismaUser.id);
    t.field(PrismaUser.name);
    t.field(PrismaUser.email);
    t.field(PrismaUser.emailVerified);
    t.field(PrismaUser.image);
    t.field(PrismaUser.createdAt);
    t.field(PrismaUser.updatedAt);
    t.field(PrismaUser.Recipes);
  },
});

export const userQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: User,
      args: {
        where: arg({ type: nonNull(UserWhereUniqueInput) }),
      },
      resolve: async (_, args, ctx) => {
        return ctx.prisma.user.findFirst({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore TODO: need to come back and figure this out
          where: args.where,
        });
      },
    });
  },
});
