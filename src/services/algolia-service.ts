import algoliasearch from 'algoliasearch';
import algoliasearchlite from 'algoliasearch/lite';

import { isProduction } from '../env';
import { Recipe, User } from '../graphql-codegen';

const DEV_RECIPES_INDEX = 'dev_recipeapp_recipes';
const PROD_RECIPES_INDEX = 'prod_recipeapp_recipes';
const DEV_USERS_INDEX = 'dev_recipeapp_users';
const PROD_USERS_INDEX = 'prod_recipeapp_users';

export const getRecipesIndex = () =>
  isProduction() ? PROD_RECIPES_INDEX : DEV_RECIPES_INDEX;

export const getUsersIndex = () =>
  isProduction() ? PROD_USERS_INDEX : DEV_USERS_INDEX;

const adminClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID || '',
  process.env.ALGOLIA_ADMIN_API_KEY || ''
);

const recipesIndex = adminClient.initIndex(getRecipesIndex());
const usersIndex = adminClient.initIndex(getUsersIndex());

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

export const indexUser = (user: User) => {
  return usersIndex.saveObject({
    objectID: user.id,
    name: user.name,
    email: user.email,
    emailVerified: user.emailVerified,
    image: user.image,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt,
  });
};

export const deleteRecipeIndex = (objectID: string) =>
  recipesIndex.deleteObject(objectID);
