import {all} from 'redux-saga/effects';
import {
  columnsSaga,
  prayersSaga,
  loginSaga,
  registerSaga,
  commentsSaga,
} from './sagas';

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    columnsSaga(),
    prayersSaga(),
    commentsSaga(),
  ]);
}
