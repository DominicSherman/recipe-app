import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import * as Options from 'enums/options';

export const NavBar = () => {
  const [session] = useSession();

  return (
    <div className="top-0 sticky w-full flex flex-row justify-center">
      <div className="container flex w-maxflex-row justify-between content-center w-full px-16 py-4">
        <h2 className="text-xl font-semibold">{Options.APP_TITLE}</h2>
        <div>
          {session ? (
            <button className="btn" onClick={signOut}>
              Logout
            </button>
          ) : (
            <button className="btn" onClick={signIn}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
