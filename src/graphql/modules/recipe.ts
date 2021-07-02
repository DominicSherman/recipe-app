import {
  deleteRecipeIndex,
  indexRecipe,
} from './../../services/algolia-service';
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
    t.model.cookTime();
    t.model.description();
    t.model.serveCount();
    t.model.headerImageUrl();
  },
});

export const recipeQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.recipe();
    t.crud.recipes({
      filtering: true,
      ordering: true,
    });
  },
});

export const recipeMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneRecipe({
      resolve: async (root, args, ctx, info, originalResolve) => {
        const res = await originalResolve(root, args, ctx, info);

        if (res) {
          try {
            await indexRecipe(res);
          } catch (error) {
            console.log({ error });
          }
        }

        return res;
      },
    });

    t.crud.updateOneRecipe({
      resolve: async (root, args, ctx, info, originalResolve) => {
        const res = await originalResolve(root, args, ctx, info);

        if (res) {
          try {
            await indexRecipe(res);
          } catch (error) {
            console.log({ error });
          }
        }

        return res;
      },
    });

    t.crud.deleteOneRecipe({
      resolve: async (root, args, ctx, info, originalResolve) => {
        const res = await originalResolve(root, args, ctx, info);

        if (res) {
          try {
            await deleteRecipeIndex(res.id);
          } catch (error) {
            console.log({ error });
          }
        }

        return res;
      },
    });
  },
});
