import { extendType, objectType } from 'nexus';

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

export const userQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user();
    t.crud.users();
  },
});
