"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { updateMessageRequest } from "../../store/contact/contactSlice";

export default function EditModal({
  open,
  setOpen,
  oldName,
  oldEmail,
  oldMessage,
  id,
  cancelButtonName,
  confirmButtonName,
  title,
  contents,
}) {
  console.log("oldMessage ", oldMessage);
  const dispatch = useDispatch();
  // Update the state when the modal opens and contains a message
  const [newMessage, setNewMessage] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    if (open) {
      setNewMessage(oldMessage);
      setNewName(oldName);
      setNewEmail(oldEmail);
    }
  }, [open, oldName, oldEmail, oldMessage]);

  const handleSubmit = () => {
    if (newMessage.trim() !== "") {
      dispatch(updateMessageRequest({ id, newName, newEmail, newMessage }));
      setOpen(false); // Close the modal
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="size-6 text-yellow-600"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    {title}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{contents}</p>
                    {/* Editable field */}
                    <label className="mt-2 text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full mt-2 p-2 border rounded-md text-sm"
                    />
                    <label className="mt-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="w-full mt-2 p-2 border rounded-md text-sm"
                    />
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="w-full mt-2 p-2 border rounded-md text-sm"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                {confirmButtonName} {/* Save Button */}
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                {cancelButtonName} {/* Cancel Button */}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
