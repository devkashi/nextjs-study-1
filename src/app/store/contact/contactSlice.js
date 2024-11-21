import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "./contactThunks";
import {
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_SUCCEEDED,
  STATUS_FAILED,
  ERROR_MESSAGE_DEFAULT,
} from "../../constants/status/status";

// Initial state
const initialState = {
  status: STATUS_IDLE,
  message: null,
  error: null,
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
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = STATUS_SUCCEEDED;
        state.message = action.payload;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = STATUS_FAILED;
        state.error = action.payload || ERROR_MESSAGE_DEFAULT;
      });
  },
});

export const { resetState } = contactSlice.actions;

export default contactSlice.reducer;
