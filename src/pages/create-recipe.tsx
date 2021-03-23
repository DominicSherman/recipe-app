import { gql } from '@apollo/client';
import { NavBar } from 'components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import tw from 'twin.macro';
import { v4 } from 'uuid';
import { useCreateOneRecipeMutation } from '../../graphql-codegen';

export const CREATE_RECIPE_MUTATION = gql`
  mutation createOneRecipe($data: RecipeCreateInput!) {
    createOneRecipe(data: $data) {
      id
    }
  }
`;

export default function CreateRecipe() {
  const { register, handleSubmit, errors, reset } = useForm();
  const { addToast } = useToasts();

  const [createRecipe, { loading }] = useCreateOneRecipeMutation({
    onCompleted: () => {
      addToast('Success!', { appearance: 'success' });
      reset();
    },
    onError: () => {
      addToast('Something went wrong.', { appearance: 'error' });
    },
  });

  const onSubmit = handleSubmit((data) =>
    createRecipe({
      variables: {
        data: {
          id: v4(),
          title: data.title,
          user: {
            connect: {
              id: 1,
            },
          },
        },
      },
    })
  );

  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <div className="h-screen flex flex-col justify-center items-center w-full">
        <div>
          <h2 tw="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Recipe
          </h2>
        </div>
        <form onSubmit={onSubmit} tw="mt-8 space-y-6">
          <input name="remember" type="hidden" value="true" />
          <div tw="space-y-px">
            <input
              autoComplete="current-password"
              css={errors['password'] ? tw`border-red-500` : ''}
              id="title"
              name="title"
              placeholder="Recipe Title"
              ref={register({ required: true })}
              tw="appearance-none rounded-md relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 sm:text-sm shadow-lg border focus:border-gray-600 outline-none"
            />
          </div>
          <div>
            <button
              className="group btn"
              css={loading ? tw`opacity-70` : ''}
              tw="relative w-full flex justify-center py-2 px-4"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
