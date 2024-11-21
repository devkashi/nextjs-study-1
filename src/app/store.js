import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import contactReducer from "./store/contact/contactSlice";
import contactSaga from "./store/contact/contactSaga";

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk, add saga middleware
});

// Run the Saga middleware
sagaMiddleware.run(contactSaga);

export default store;
