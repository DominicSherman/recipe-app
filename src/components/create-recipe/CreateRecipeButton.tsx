import { useEffect, useState } from 'react';
import { CreateRecipeModal } from './CreateRecipeModal';

export const CreateRecipeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event): void => {
      if (event.key === 'c') {
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return (): void => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

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
