import { gql } from '@apollo/client';
import { CreateRecipeButton, NavBar } from 'components';
import Link from 'next/link';
import { useSession } from 'next-auth/client';

import { Recipe, useGetUserQuery } from '../../graphql-codegen';

export const CREATE_RECIPE_MUTATION = gql`
  query getUser($where: UserWhereUniqueInput!) {
    user(where: $where) {
      createdAt
      email
      emailVerified
      id
      image
      name
      updatedAt
    }
    recipes {
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
  const [session] = useSession();
  const userId = session?.user?.id;

  const { data } = useGetUserQuery({
    skip: !userId,
    variables: {
      where: {
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
