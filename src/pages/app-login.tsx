import { APP_TITLE } from 'enums/options';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import tw from 'twin.macro';

const Login: FC = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const router = useRouter();
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  const tryToLogin = async ({ password }): Promise<void> => {
    setLoading(true);

    const response = await fetch('/api/app-login', {
      body: JSON.stringify({ password }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.status !== 200) {
      const message =
        response.status === 401
          ? 'Invalid password, please try again.'
          : 'Something went wrong.';

      addToast(message, { appearance: 'error' });
    } else {
      reset();

      await router.push('/');
    }

    setLoading(false);
  };

  const onSubmit = handleSubmit(tryToLogin);

  return (
    <div tw="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div tw="max-w-md w-full space-y-8">
        <div>
          <h2 tw="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter password for {APP_TITLE}
          </h2>
        </div>
        <form onSubmit={onSubmit} tw="mt-8 space-y-6">
          <input name="remember" type="hidden" value="true" />
          <div tw="space-y-px">
            <label htmlFor="password" tw="sr-only">
              Password
            </label>
            <input
              autoComplete="current-password"
              css={errors['password'] ? tw`border-red-500` : ''}
              id="password"
              name="password"
              placeholder="Password"
              ref={register({ required: true })}
              tw="appearance-none rounded-md relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 sm:text-sm shadow-lg border focus:border-gray-600 outline-none"
              type="password"
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
};

export default Login;
