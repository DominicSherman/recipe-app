import { gql } from '@apollo/client';
import { NavBar } from 'components';
import Editor from 'components/Editor';
import { useRouter } from 'next/router';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js';

import { useGetRecipeQuery, useUpdateRecipeMutation } from 'graphql-codegen';
import { useUserId } from 'utils';

export const GET_RECIPE_QUERY = gql`
  query getRecipe($where: RecipeWhereUniqueInput!) {
    recipe(where: $where) {
      id
      userId
      title
      text
    }
  }

  mutation updateRecipe(
    $data: RecipeUpdateInput!
    $where: RecipeWhereUniqueInput!
  ) {
    updateOneRecipe(data: $data, where: $where) {
      id
      userId
      title
      text
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

  const [updateRecipe] = useUpdateRecipeMutation({
    onError: (error) => {
      console.log('error', error);
    },
  });

  const userId = useUserId();
  const recipeTitle = response.data?.recipe?.title;
  const recipeText = response.data?.recipe?.text;
  const userOwnsRecipe = Number(userId) === response.data?.recipe?.userId;

  console.log(
    'userId, userOwnsRecipe, response?.data?.recipe',
    userId,
    userOwnsRecipe,
    response?.data?.recipe
  );

  const htmlText = recipeText
    ? stateToHTML(convertFromRaw(JSON.parse(recipeText)))
    : '';

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      <div className="w-full flex flex-col items-center">
        <div className="pt-16 flex flex-col justify-center items-center w-full max-w-2xl">
          {recipeTitle ? (
            <h1 className="text-primary">{recipeTitle}</h1>
          ) : (
            <div className="w-56 rounded-md h-8 animate-pulse bg-blue-300" />
          )}
          {userOwnsRecipe ? (
            <Editor
              defaultText={recipeText}
              onSave={(rawContent) => {
                updateRecipe({
                  variables: {
                    data: {
                      text: {
                        set: rawContent,
                      },
                    },
                    where: {
                      id,
                    },
                  },
                });
              }}
            />
          ) : (
            <div
              className="mt-8 w-full"
              dangerouslySetInnerHTML={{ __html: htmlText }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
