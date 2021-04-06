import { gql } from '@apollo/client';

export const getRecipeQuery = gql`
  query getRecipe($where: RecipeWhereUniqueInput!) {
    recipe(where: $where) {
      id
      userId
      title
      text
    }
  }
`;

export const updateRecipeMutation = gql`
  mutation updateRecipe(
    $data: RecipeUpdateInput!
    $where: RecipeWhereUniqueInput!
  ) {
    updateOneRecipe(data: $data, where: $where) {
      id
      userId
      title
      text
    }
  }
`;

export const createRecipeMutation = gql`
  mutation createOneRecipe($data: RecipeCreateInput!) {
    createOneRecipe(data: $data) {
      id
    }
  }
`;

export const getUserAndRecipesQuery = gql`
  query getUserAndRecipes(
    $whereUser: UserWhereUniqueInput!
    $whereRecipes: RecipeWhereInput!
  ) {
    user(where: $whereUser) {
      createdAt
      email
      emailVerified
      id
      image
      name
      updatedAt
    }
    recipes(where: $whereRecipes) {
      id
      title
    }
  }
`;

export const deleteRecipeMutation = gql`
  mutation deleteOneRecipe($where: RecipeWhereUniqueInput!) {
    deleteOneRecipe(where: $where) {
      id
    }
  }
`;
