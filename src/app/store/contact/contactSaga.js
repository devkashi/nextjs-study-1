import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import {
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  deleteMessageRequest,
  deleteMessageSuccess,
  deleteMessageFailure,
} from "./contactSlice";

// Saga to handle sending a message
function* sendMessageSaga(action) {
  console.log("action.payload ", action.payload);
  try {
    const response = yield call(
      axios.post,
      "http://127.0.0.1:8000/api/create/contact",
      action.payload
    );
    yield put(sendMessageSuccess(response.data));
  } catch (error) {
    yield put(
      sendMessageFailure(
        error.response?.data?.message || "Failed to send message"
      )
    );
  }
}

// Saga to handle fetching all messages
function* fetchMessagesSaga() {
  try {
    const response = yield call(
      axios.get,
      "http://127.0.0.1:8000/api/list/contact"
    );
    yield put(fetchMessagesSuccess(response.data));
  } catch (error) {
    yield put(
      fetchMessagesFailure(
        error.response?.data?.message || "Failed to fetch messages"
      )
    );
  }
}

function* deleteMessagesSaga(action) {
  console.log("action.payload ", action.payload);
  try {
    const response = yield call(
      axios.post,
      `http://127.0.0.1:8000/api/delete/contact/${action.payload}`
    );
    yield put(deleteMessageSuccess(response.data));
  } catch (error) {
    yield put(
      deleteMessageFailure(
        error.response?.data?.message || "Failed to delete message"
      )
    );
  }
}

// Watcher Saga for the send message request
function* watchSendMessage() {
  yield takeEvery(sendMessageRequest.type, sendMessageSaga);
}

// Watcher Saga for the fetch messages request
function* watchFetchMessages() {
  yield takeEvery(fetchMessagesRequest.type, fetchMessagesSaga);
}

function* watchDeleteMessages() {
  yield takeEvery(deleteMessageRequest.type, deleteMessagesSaga);
}

// Root Saga
export default function* contactSaga() {
  yield all([watchSendMessage(), watchFetchMessages(), watchDeleteMessages()]);
}
