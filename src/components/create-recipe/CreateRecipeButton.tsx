import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { CreateRecipeModal } from './CreateRecipeModal';
import { Button } from 'components/generic';

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
    <div className="flex justify-self-start">
      <Button
        className="btn p-2 ml-4 flex flex-row"
        keyboardShortcut="C"
        onClick={() => setIsOpen(true)}
      >
        Create Recipe
      </Button>
      <CreateRecipeModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
