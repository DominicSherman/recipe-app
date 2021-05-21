import { CreateRecipeButton, Page, RecipeItem } from 'components';
import { useGetUserAndRecipesQuery } from 'graphql-codegen';
import { useUserId } from 'utils';

export default function MyRecipes() {
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
    <Page>
      <div className="w-full">
        <div className="max-w-7xl w-full mx-auto py-4">
          <CreateRecipeButton />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h1>My Recipes</h1>
        <div className="hr" />
        <div className="max-w-xl grid grid-flow-row grid-cols-3">
          {data?.recipes.map((recipe) => (
            <RecipeItem id={recipe.id} />
          ))}
        </div>
      </div>
    </Page>
  );
}
