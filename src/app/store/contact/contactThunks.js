import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/contact", messageData);
      return response.data; // Assuming the API returns JSON
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send message"
      );
    }
  }
);
