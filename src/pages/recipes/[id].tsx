import { gql } from '@apollo/client';
import { NavBar } from 'components';
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

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      <div className="pt-16 flex flex-col justify-center items-center w-full">
        <h2 className="text-3xl font-bold text-primary">
          {response.data?.recipe?.title}
        </h2>
      </div>
    </div>
  );
}
