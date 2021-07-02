import { CreateRecipeButton, Page, RecipeItem } from 'components';
import { SortOrder, useGetUserAndRecipesQuery } from 'graphql-codegen';
import { useUserId } from 'utils';

export default function MyRecipes() {
  const userId = useUserId();

  const { data } = useGetUserAndRecipesQuery({
    skip: !userId,
    variables: {
      orderBy: {
        updatedAt: SortOrder.DESC,
      },
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

  console.log({ data });

  return (
    <Page>
      <div className="w-full">
        <div className="max-w-7xl w-full mx-auto py-4">
          <CreateRecipeButton />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h1>My Recipes</h1>
        <div className="hr" />
        <div className="max-w-xl">
          {data?.recipes.map((recipe) => (
            <RecipeItem id={recipe.id} />
          ))}
        </div>
      </div>
    </Page>
  );
}
