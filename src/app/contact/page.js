"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { sendMessage } from "../store/contact/contactThunks";
import { resetState } from "../store/contact/contactSlice";
import AlertComponent from "../components/AlertComponent/AlertComponent";
import "../home/style.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to a server or email)
    console.log(formData);
    dispatch(sendMessage(formData)); // Dispatch Axios-based thunk
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  // Determine alert type and message based on Redux status
  useEffect(() => {
    if (status === "succeeded") {
      setAlertMessage("Message sent successfully!");
      setAlertType("success");
      // Dispatch resetState after the alert is shown
      setTimeout(() => {
        dispatch(resetState());
      }, 2000); // Delay reset state by 2 seconds
    } else if (status === "failed") {
      setAlertMessage(`Something went wrong: ${error}`);
      setAlertType("error");
      // Dispatch resetState after the alert is shown
      setTimeout(() => {
        dispatch(resetState());
      }, 2000); // Delay reset state by 2 seconds
    }
  }, [status, error, dispatch]); // Adding dispatch to dependencies

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
              disabled={status === "pending"}
              type="submit"
              className="w-full py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              {status === "pending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {alertMessage && alertType && (
          <AlertComponent
            key={alertMessage} // Add a unique key to force re-render
            message={alertMessage}
            type={alertType}
          />
        )}

        {/* ToastContainer for react-toastify */}
        <ToastContainer />
      </div>
    </>
  );
}
