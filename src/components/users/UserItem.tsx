import { UserFragmentFragment } from 'graphql-codegen';
import Link from 'next/link';

export const UserItem = ({ user }: { user: UserFragmentFragment }) => {
  return (
    <div className="relative w-full h-[100px] p-4 m-2 flex flex-row items-center justify-between rounded-lg shadow-md bg-tertiary filter overflow-hidden">
      <Link href={`users/${user.id}`}>
        <a className="flex flex-row items-center">
          <img
            alt=""
            className="mr-4 rounded-full w-[60px]"
            src={user.image || ''}
          />
          <div className="flex flex-col">
            <h3 className="text-white z-10">{user.name}</h3>
            <h5 className="text-white z-10">{user.email}</h5>
          </div>
        </a>
      </Link>
    </div>
  );
};
