import algoliasearch from 'algoliasearch';
import algoliasearchlite from 'algoliasearch/lite';

import { isProduction } from '../env';
import { Recipe } from '../graphql-codegen';

const DEV_RECIPES_INDEX = 'dev_recipeapp_recipes';
const PROD_RECIPES_INDEX = 'prod_recipeapp_recipes';

export const getRecipesIndex = () =>
  isProduction() ? PROD_RECIPES_INDEX : DEV_RECIPES_INDEX;

const adminClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID || '',
  process.env.ALGOLIA_ADMIN_API_KEY || ''
);

const recipesIndex = adminClient.initIndex(getRecipesIndex());

export const searchClient = algoliasearchlite(
  process.env.ALGOLIA_APPLICATION_ID || '',
  process.env.ALGOLIA_SEARCH_API_KEY || ''
);

export const indexRecipe = (recipe: Omit<Recipe, 'user'>) => {
  return recipesIndex.saveObject({
    objectID: recipe.id,
    title: recipe.title,
    text: recipe.text,
    cookTime: recipe.cookTime,
    description: recipe.description,
    serveCount: recipe.serveCount,
    headerImageUrl: recipe.headerImageUrl,
    updatedAt: recipe.updatedAt,
    createdAt: recipe.createdAt,
  });
};

export const deleteRecipeIndex = (objectID: string) =>
  recipesIndex.deleteObject(objectID);
