import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "./contactThunks";
import {
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_SUCCEEDED,
  STATUS_FAILED,
  ERROR_MESSAGE_DEFAULT,
} from "../../constants/status/status";

// Initial state for contact form
const initialState = {
  status: STATUS_IDLE,
  message: null, // Holds success message
  error: null, // Holds error message
  data: [],
};

// Redux slice for contact form
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // Reset state to initial values
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = STATUS_PENDING;
        state.message = null; // Clear previous message
        state.error = null; // Clear previous error
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.message = "Message sent successfully!"; // Success message
        state.error = null;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = STATUS_FAILED;
        state.message = null; // Clear previous success message
        state.error = action.payload || ERROR_MESSAGE_DEFAULT; // Error message
      });
  },
});

export const { resetState } = contactSlice.actions;

export default contactSlice.reducer;
