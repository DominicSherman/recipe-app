import { useGetRecipeQuery } from 'graphql-codegen';
import Link from 'next/link';

export const RecipeItem = ({ id }: { id: string }) => {
  const queryData = useGetRecipeQuery({
    variables: {
      where: {
        id,
      },
    },
  });
  const recipe = queryData?.data?.recipe;
  // const [deleteRecipe] = useDeleteOneRecipeMutation({
  //   variables: {
  //     where: {
  //       id,
  //     },
  //   },
  // });

  if (!recipe) {
    return null;
  }

  return (
    <Link href={`recipes/${id}`}>
      <a>
        <div className="relative w-[150px] h-[100px] p-4 m-2 flex flex-col items-center justify-center rounded-lg shadow-md bg-tertiary filter overflow-hidden">
          <h3 className="text-white z-10">{recipe.title}</h3>
        </div>
      </a>
    </Link>
    /* <button className="btn-secondary" onClick={() => deleteRecipe()}>
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
      </button> */
  );
};
