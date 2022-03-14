import { ExclamationIcon } from '@heroicons/react/outline';
import { Dialog } from '@headlessui/react';

export const FailureModal = () => {
  return (
    <div className="sm:flex sm:items-start">
      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
      </div>
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
          El mensaje no se pudo enviar
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">Su mensaje no se pudo enviar correctamente, inténtelo de nuevo.</p>
        </div>
      </div>
    </div>
  );
};

export default FailureModal;
