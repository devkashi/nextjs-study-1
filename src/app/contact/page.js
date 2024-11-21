"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../store/contact/contactThunks";
import { resetState } from "../store/contact/contactSlice";
import AlertComponent from "../components/AlertComponent/AlertComponent";
import "../home/style.css";
import { ToastContainer } from "react-toastify";
import {
  STATUS_SUCCEEDED,
  STATUS_PENDING,
  STATUS_FAILED,
} from "../constants/status/status";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();
  const { status, message, error } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(formData)); // Dispatch Axios-based thunk
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  // Handle resetting the state after displaying the message/error
  useEffect(() => {
    if (status === STATUS_SUCCEEDED || status === STATUS_FAILED) {
      setTimeout(() => {
        dispatch(resetState()); // Reset state after the alert is shown
      }, 2000);
    }
  }, [status, dispatch]);

  return (
    <>
      <div className="max-w-2xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              disabled={status === STATUS_PENDING}
              type="submit"
              className="w-full py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              {status === STATUS_PENDING ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Display the alert */}
        {(message || error) && (
          <AlertComponent
            key={message || error} // Ensure the AlertComponent re-renders
            message={message || error}
            type={status === STATUS_SUCCEEDED ? "success" : "error"}
          />
        )}

        {/* ToastContainer for react-toastify */}
        <ToastContainer />
      </div>
    </>
  );
}
