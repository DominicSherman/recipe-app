import { gql } from '@apollo/client';
import { CreateRecipeButton, NavBar } from 'components';
import Link from 'next/link';
import { useUserId } from 'utils';

import { Recipe, useGetUserAndRecipesQuery } from '../../graphql-codegen';

export const CREATE_RECIPE_MUTATION = gql`
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

  mutation deleteOneRecipe($where: RecipeWhereUniqueInput!) {
    deleteOneRecipe(where: $where) {
      id
    }
  }
`;

export default function Home() {
  const userId = useUserId();

  const { data } = useGetUserAndRecipesQuery({
    skip: !userId,
    variables: {
      whereRecipes: {
        userId: {
          equals: Number(userId),
        },
      },
      whereUser: {
        id: Number(userId),
      },
    },
  });

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      <div className="w-full">
        <div className="max-w-7xl w-full mx-auto py-4">
          <CreateRecipeButton />
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center w-full">
        {data?.recipes.map((recipe) => (
          <RecipeItem recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

const RecipeItem = ({
  recipe,
}: {
  recipe: { __typename?: 'Recipe' } & Pick<Recipe, 'id' | 'title'>;
}) => {
  return (
    <div className="w-96 flex flex-row justify-between">
      <Link href={`recipes/${recipe.id}`}>
        <a className="text-2xl text-white font-semibold ml-7" href="#">
          {recipe.title}
        </a>
      </Link>
    </div>
  );
};
