import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { v4 } from 'uuid';
import { useSession } from 'next-auth/client';

import { useCreateOneRecipeMutation } from 'graphql-codegen';
import { Modal } from 'components';
import { Button } from 'components/generic';

export const CreateRecipeModal = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const { register, handleSubmit, errors, reset } = useForm();
  const { addToast } = useToasts();
  const [session] = useSession();
  const userId = session?.user?.id || '';

  const [createRecipe, { loading }] = useCreateOneRecipeMutation({
    onCompleted: (data) => {
      addToast('Success!', { appearance: 'success' });
      reset();
      router.push(`/recipes/${data.createOneRecipe.id}`);
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
          userId: Number(userId),
        },
      },
    })
  );

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById('title');

      if (isOpen && element) {
        element.focus();
      }
    }, 50);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-primary">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
            Create Recipe
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-px">
            <input
              autoComplete="current-password"
              className={`appearance-none rounded-md border-none relative block w-full px-3 py-2 placeholder-gray-500 text-primary border focus:border-gray-600 outline-none text-2xl font-semibold bg-secondary ${
                errors['title'] ? 'border-red-500' : ''
              }`}
              id="title"
              name="title"
              placeholder="Recipe Title"
              ref={register({ required: true })}
            />
          </div>
          <div className="w-full flex flex-row justify-between">
            <Button
              className="btn-secondary btn-wide"
              keyboardShortcut="Esc"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Cancel
            </Button>
            <Button
              className={`btn btn-wide ${loading && 'btn-loading'}`}
              keyboardShortcut="Enter"
              type="submit"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
