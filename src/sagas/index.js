import { all, call, takeLatest, put } from "redux-saga/effects";
import Api from "../api/Api";

export function* handleFetchUsers() {
  try {
    const users = yield call(Api.fetchUsers);
    yield put({ type: "USERS_FETCH_SUCCEEDED", users: users });
  } catch (e) {
    yield put({ type: "USERS_FETCH_FAILED", message: e.message });
  }
}

export function* rootSaga() {
  yield all([takeLatest("FETCH_USERS", handleFetchUsers)]);
}
