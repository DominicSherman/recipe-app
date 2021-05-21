import { Transition } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';

export const Modal = ({ isOpen, setIsOpen, children }) => {
  const [hideModal, setHideModal] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHideModal(false);
    } else {
      setTimeout(() => setHideModal(true), 300);
    }
  }, [isOpen, hideModal]);

  useEffect(() => {
    const closeModal = (): void => {
      if (setIsOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event): void => {
      if (mainRef.current && !mainRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleKeyPress = (event): void => {
      // esc key is pressed
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div
      aria-labelledby="dialog-1-title"
      aria-modal="true"
      className={`fixed z-50 inset-0 overflow-y-auto ${
        hideModal ? 'hidden' : 'block'
      }`}
      role="dialog"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={isOpen}
        />

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          aria-hidden="true"
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
        >
          &#8203;
        </span>

        <Transition
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          enter="opacity-100 translate-y-0 sm:scale-100"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          show={isOpen}
        >
          <div ref={mainRef}>{isOpen ? children : null}</div>
        </Transition>
      </div>
    </div>
  );
};
