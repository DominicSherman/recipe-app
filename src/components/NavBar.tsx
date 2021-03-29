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
        <MobileNav />
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
      <div className="hidden md:block">
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

const MobileNav = () => (
  <div className="md:hidden" id="mobile-menu">
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img
            alt=""
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium leading-none text-white">
            Tom Cook
          </div>
          <div className="text-sm font-medium leading-none text-gray-400">
            tom@example.com
          </div>
        </div>
        <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <a
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          href="#"
        >
          Your Profile
        </a>

        <a
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          href="#"
        >
          Settings
        </a>

        <a
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          href="#"
        >
          Sign out
        </a>
      </div>
    </div>
  </div>
);
