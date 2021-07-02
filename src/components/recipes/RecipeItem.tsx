import {
  RecipeFragmentFragment,
  useDeleteOneRecipeMutation,
} from 'graphql-codegen';
import Link from 'next/link';
import { useUserId } from 'utils';

export const RecipeItem = ({ recipe }: { recipe: RecipeFragmentFragment }) => {
  const userId = useUserId();
  const [deleteRecipe] = useDeleteOneRecipeMutation({
    variables: {
      where: {
        id: recipe.id,
      },
    },
  });

  return (
    <div className="relative w-full h-[100px] p-4 m-2 flex flex-row items-center justify-between rounded-lg shadow-md bg-tertiary filter overflow-hidden">
      <Link href={`recipes/${recipe.id}`}>
        <a>
          <h3 className="text-white z-10">{recipe.title}</h3>
          <h5 className="text-white z-10">{recipe.description}</h5>
        </a>
      </Link>
      {String(recipe.userId) === String(userId) && (
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
      )}
    </div>
  );
};
