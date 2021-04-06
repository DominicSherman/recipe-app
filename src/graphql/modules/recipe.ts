import { objectType, extendType } from 'nexus';

export const Recipe = objectType({
  name: 'Recipe',
  description: 'A Recipe',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.text();
    t.model.userId();
    t.model.user();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const recipeQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.recipe();
    t.crud.recipes({
      filtering: true,
    });
  },
});

export const recipeMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneRecipe();
    t.crud.updateOneRecipe();
    t.crud.deleteOneRecipe();
  },
});
