import { useSession } from 'next-auth/client';

export const useUserId = () => {
  const [session] = useSession();
  const userId = session?.user?.id || null;

  return userId;
};
