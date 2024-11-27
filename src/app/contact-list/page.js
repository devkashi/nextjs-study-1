"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetState,
  sendMessageRequest,
  fetchMessagesRequest,
  deleteMessageRequest,
  updateMessageRequest,
} from "../store/contact/contactSlice";
import AlertComponent from "../components/AlertComponent/AlertComponent";
import "../home/style.css";
import { ToastContainer } from "react-toastify";
import DeleteModal from "../components/ModalComponent/DeleteModal";

export default function ContactList() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  console.log("open ", open);
  console.log("activeId ", activeId);

  //   spread operator
  const { status, message, error, data } = useSelector(
    (state) => state.contact
  );

  console.log("data kashish", data);

  // Handle resetting the state after displaying the message/error
  useEffect(() => {
    dispatch(fetchMessagesRequest()); // Reset state after the alert is shown
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("id ", id);
    dispatch(deleteMessageRequest(id));
  };

  const handleDeleteModal = (id) => {
    setActiveId(id);
    setOpen(true);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Messages</h2>
        <ul className="space-y-4">
          {data.map((single) => (
            <li
              key={single.id}
              className="p-4 bg-gray-100 border rounded-lg hover:bg-gray-200 transition duration-300"
            >
              <div>
                <p className="text-gray-700">{single.message}</p>
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={() => handleEdit(single.id, single.message)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteModal(single.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        id={activeId}
        cancelButtonName="Cancel"
        confirmButtonName="Delete"
        title="Delete Message"
        contents="Are you sure you want to delete this message?"
        handleDelete={handleDelete}
      />
    </>
  );
}
