import { gql } from '@apollo/client';
import { NavBar } from 'components';
import Editor from 'components/Editor';
import { useRouter } from 'next/router';

import { useGetRecipeQuery } from 'graphql-codegen';

export const GET_RECIPE_QUERY = gql`
  query getRecipe($where: RecipeWhereUniqueInput!) {
    recipe(where: $where) {
      id
      title
    }
  }
`;

const getIdFromQuery = (id?: string | string[]): string => {
  if (!id || Array.isArray(id)) {
    return '';
  }

  return id;
};

export default function RecipeId() {
  const router = useRouter();
  const id = getIdFromQuery(router.query.id);
  const idIsInvalid = !id.length || Array.isArray(id);

  const response = useGetRecipeQuery({
    skip: idIsInvalid,
    variables: {
      where: {
        id,
      },
    },
  });

  const recipeTitle = response.data?.recipe?.title;

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      <div className="w-full flex flex-col items-center">
        <div className="pt-16 flex flex-col justify-center w-full max-w-7xl">
          {recipeTitle ? (
            <h1 className="text-primary">{recipeTitle}</h1>
          ) : (
            <div className="w-56 rounded-md h-8 animate-pulse bg-blue-300" />
          )}
          <Editor />
        </div>
      </div>
    </div>
  );
}
