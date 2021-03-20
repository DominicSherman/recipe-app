import { arg, extendType, objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  description: 'A User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.emailVerified();
    t.model.image();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const UserQueries = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('user', {
      type: 'User',
      args: {
        userId: arg({
          type: 'Int',
          default: 0,
          description: 'Id of user you are querying for',
        }),
      },
      description: 'Returns the user by id passed',
      resolve: (_root, _args, ctx) =>
        ctx.db.user.findUnique({
          where: {
            id: _args.userId,
          },
        }),
    });
  },
});
