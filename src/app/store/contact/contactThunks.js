import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ERROR_MESSAGE_DEFAULT } from "../../constants/status/status";

// Thunk to send the message
export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/contact", messageData);
      return response.data; // Assuming the API returns JSON
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || ERROR_MESSAGE_DEFAULT
      );
    }
  }
);
