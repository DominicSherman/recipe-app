import * as Options from 'enums/options';
import { useSession, signIn, signOut } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  const [session] = useSession();

  return (
    <div>
      <nav className="bg-secondary">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a className="text-primary text-xl font-medium">
                    {Options.APP_TITLE}
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/">
                  <a>
                    <p className="mr-4">Home</p>
                  </a>
                </Link>
                {session ? (
                  <Link href="/my-recipes">
                    <a>
                      <p className="mr-4">My Recipes</p>
                    </a>
                  </Link>
                ) : null}
                <button className="btn" onClick={session ? signOut : signIn}>
                  {session ? 'Logout' : 'Login'}
                </button>
                {session ? (
                  <div className="ml-3 relative">
                    <div>
                      <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        type="button"
                      >
                        <img
                          alt=""
                          className={`h-12 w-12 rounded-full ${
                            !session?.user?.image ? 'bg-gray-400' : ''
                          }`}
                          src={session?.user?.picture}
                        />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
