import { Page, RecipeItem } from 'components';
import { SortOrder, useGetUserAndRecipesQuery } from 'graphql-codegen';
import { useRouterId } from 'utils';

export default function User() {
  const [userId] = useRouterId();
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

  return (
    <Page>
      <div className="flex flex-col justify-center items-center w-full mt-2">
        <h1>{data?.user?.name}</h1>
        <div className="hr" />
        <div className="max-w-xl">
          {data?.recipes.map((recipe) => (
            <RecipeItem recipe={recipe} />
          ))}
        </div>
      </div>
    </Page>
  );
}
