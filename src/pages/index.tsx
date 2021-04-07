import { CreateRecipeButton, NavBar } from 'components';
import Link from 'next/link';
import { useUserId } from 'utils';
import {
  Recipe,
  useDeleteOneRecipeMutation,
  useGetUserAndRecipesQuery,
} from 'graphql-codegen';

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
      <div className="flex flex-col justify-center items-center w-full">
        <h1>My Recipes</h1>
        <div className="hr" />
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
  const [deleteRecipe] = useDeleteOneRecipeMutation({
    variables: {
      where: {
        id: recipe.id,
      },
    },
  });

  return (
    <div className="w-96 m-4 flex flex-row justify-between items-center">
      <Link href={`recipes/${recipe.id}`}>
        <a className="card" href="#">
          {recipe.title}
        </a>
      </Link>
      <button className="btn-secondary" onClick={() => deleteRecipe()}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </button>
    </div>
  );
};
