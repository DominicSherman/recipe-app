import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import * as Options from 'enums/options';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Search Recipes', href: '/search-recipes' },
  { name: 'Search Users', href: '/search-users' },
  { name: 'My Recipes', href: '/my-recipes' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const NavBar = () => {
  const [session] = useSession();

  return (
    <Disclosure as="nav" className="bg-secondary">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <MenuIcon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 items-center hidden sm:flex">
                  <Link href="/">
                    <a className="text-primary text-3xl font-extrabold font-satisfy">
                      {Options.APP_TITLE}
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        // aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          //item.current
                          false
                            ? 'bg-gray-900 text-white'
                            : 'text-primary hover:bg-gray-300',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        href={item.href}
                        key={item.name}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  // aria-current={item.current ? 'page' : undefined}
                  as="a"
                  className={classNames(
                    // item.current
                    false
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
