import { arg, extendType, list, nonNull, objectType } from 'nexus';
import { Recipe as PrismaRecipe } from 'nexus-prisma';

import {
  RecipeCreateInput,
  RecipeOrderByInput,
  RecipeUpdateInput,
  RecipeWhereInput,
  RecipeWhereUniqueInput,
} from './nexus-types';

export const Recipe = objectType({
  name: PrismaRecipe.$name,
  description: PrismaRecipe.$description,
  definition(t) {
    t.field(PrismaRecipe.id);
    t.field(PrismaRecipe.userId);
    t.field(PrismaRecipe.user);
    t.field(PrismaRecipe.createdAt);
    t.field(PrismaRecipe.updatedAt);
    t.field(PrismaRecipe.title);
    t.field(PrismaRecipe.text);
    t.field(PrismaRecipe.cookTime);
    t.field(PrismaRecipe.description);
    t.field(PrismaRecipe.serveCount);
    t.field(PrismaRecipe.headerImageUrl);
  },
});

export const recipeQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('recipe', {
      type: Recipe,
      args: {
        where: arg({ type: nonNull(RecipeWhereUniqueInput) }),
      },
      resolve: async (_, args, ctx) => {
        return ctx.prisma.recipe.findFirst({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore TODO: need to come back and figure this out
          where: args.where,
        });
      },
    });

    t.nonNull.list.nonNull.field('recipes', {
      type: Recipe,
      args: {
        orderBy: arg({ type: list(nonNull(RecipeOrderByInput)) }),
        where: arg({ type: RecipeWhereInput }),
      },
      resolve: async (_, args, ctx) => {
        return ctx.prisma.recipe.findMany({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore TODO: need to come back and figure this out
          where: args.where,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore TODO: need to come back and figure this out
          orderBy: args.orderBy,
        });
      },
    });
  },
});

export const recipeMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createOneRecipe', {
      type: Recipe,
      args: {
        data: arg({ type: nonNull(RecipeCreateInput) }),
      },
      resolve: async (_, args, ctx) => {
        const createdRecipe = await ctx.prisma.recipe.create({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore TODO: need to come back and figure this out
          data: args.data,
        });

        return createdRecipe;
      },
    });

    t.field('deleteOneRecipe', {
      type: Recipe,
      args: {
        where: arg({ type: nonNull(RecipeWhereUniqueInput) }),
      },
      resolve: async (_, args, ctx) => {
        const deletedRecipe = await ctx.prisma.recipe.delete({
          where: {
            id: args.where.id || undefined,
          },
        });

        return deletedRecipe;
      },
    });

    t.field('updateOneRecipe', {
      type: Recipe,
      args: {
        data: arg({ type: nonNull(RecipeUpdateInput) }),
        where: arg({ type: nonNull(RecipeWhereUniqueInput) }),
      },
      resolve: async (_, args, ctx) => {
        const updatedRecipe = await ctx.prisma.recipe.update({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore TODO: need to come back and figure this out
          data: args.data,
          where: {
            id: args.where.id || undefined,
          },
        });

        return updatedRecipe;
      },
    });
  },
});
