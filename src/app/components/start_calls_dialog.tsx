import { Dialog, Transition } from "@headlessui/react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { listings } from "./listings-table";
import PersonaDropdown from "./dropdown";

type StartCallsModalProps = {
  onStartCalls: () => void;
};

export const StartCallsModal: React.FC<StartCallsModalProps> = ({
  onStartCalls,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="h-full w-full">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
        >
          <PhoneIcon
            className="mr-1 h-4 w-4 text-gray-700"
            aria-hidden="true"
          />
          Start Calls{" "}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-12 w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Start calls for <span className="text-indigo-600">5</span>{" "}
                    properties
                  </Dialog.Title>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Question
                      <input
                        type="text"
                        placeholder="Enter the questions to ask here"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </label>
                    <button
                      type="button"
                      className="mt-2 block rounded-md border px-3 py-1.5 text-center text-sm font-semibold  leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => {
                        onStartCalls();
                        closeModal();
                      }}
                    >
                      Add Question
                    </button>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Persona
                      <PersonaDropdown />
                    </label>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Properties to call
                    </label>
                    <ul className="mt-2">
                      {listings.slice(0, 5).map((listing, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span>{listing.property_name}</span>
                          <span className="text-sm text-yellow-500">
                            Standby
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => {
                        onStartCalls();
                        closeModal();
                      }}
                    >
                      Start Calls
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
