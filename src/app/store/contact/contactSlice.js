import { createSlice } from "@reduxjs/toolkit";
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
  data: [], // To store the list of messages
};

// Redux slice for contact form
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // Reset state to initial values
    resetState: () => initialState,
    sendMessageRequest: (state) => {
      state.status = STATUS_PENDING;
      state.error = null;
    },
    sendMessageSuccess: (state, action) => {
      state.status = STATUS_SUCCEEDED;
      state.message = action.payload.message;
    },
    sendMessageFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload || ERROR_MESSAGE_DEFAULT;
    },
    fetchMessagesRequest: (state) => {
      state.status = STATUS_PENDING;
      state.error = null;
    },
    fetchMessagesSuccess: (state, action) => {
      state.status = STATUS_SUCCEEDED;
      state.data = action.payload.data.messages;
    },
    fetchMessagesFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload || ERROR_MESSAGE_DEFAULT;
    },
    deleteMessageRequest: (state, action) => {
      state.status = STATUS_PENDING;
      state.error = null;
    },
    deleteMessageSuccess: (state, action) => {
      state.status = STATUS_SUCCEEDED;
      state.message = action.payload.message;
      // Remove the deleted message from the state
      const index = state.data.findIndex((msg) => msg.id === action.payload.id);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },

    deleteMessageFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload || ERROR_MESSAGE_DEFAULT;
    },

    updateMessageRequest: (state) => {
      state.status = STATUS_PENDING;
      state.error = null;
    },

    updateMessageSuccess: (state, action) => {
      state.status = STATUS_SUCCEEDED;
      state.message = action.payload.message;
      // Find the message in the data array and update it
      const { id, newEmail, newMessage, newName } = action.payload.FormData;
      state.data = state.data.map((msg) =>
        msg.id === id
          ? { ...msg, name: newName, email: newEmail, message: newMessage }
          : msg
      );
    },

    updateMessageFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload || ERROR_MESSAGE_DEFAULT;
    },
  },
});

export const {
  resetState,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  deleteMessageRequest,
  deleteMessageSuccess,
  deleteMessageFailure,
  updateMessageRequest,
  updateMessageSuccess,
  updateMessageFailure,
} = contactSlice.actions;

export default contactSlice.reducer;
