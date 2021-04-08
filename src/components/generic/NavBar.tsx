import * as Options from 'enums/options';
import { useSession, signOut, signIn } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  const [session] = useSession();

  return (
    <div>
      <nav className="bg-secondary">
        <DesktopNav session={session} />
      </nav>
    </div>
  );
};

const DesktopNav = ({ session }) => (
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
                    className={`h-8 w-8 rounded-full ${
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
);
