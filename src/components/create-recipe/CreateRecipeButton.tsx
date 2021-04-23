import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { CreateRecipeModal } from './CreateRecipeModal';

export const CreateRecipeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session] = useSession();

  useEffect(() => {
    const handleKeyPress = (event): void => {
      if (session) {
        if (event.key === 'c') {
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return (): void => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!session) {
    return null;
  }

  return (
    <>
      <button
        className="btn p-2 ml-4 flex flex-row"
        onClick={() => setIsOpen(true)}
      >
        Create Recipe
        <kbd className="key">C</kbd>
      </button>
      <CreateRecipeModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
