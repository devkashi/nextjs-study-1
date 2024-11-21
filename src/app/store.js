import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import contactReducer from "./store/contact/contactSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      contact: contactReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
export const store = makeStore();
