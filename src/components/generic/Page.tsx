import { NavBar } from './NavBar';
import { useSession } from 'next-auth/client';

export const Page = ({ children }) => {
  const [, loading] = useSession();

  if (loading) {
    return null;
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      {children}
    </div>
  );
};
