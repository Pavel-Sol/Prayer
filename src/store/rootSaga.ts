import {all} from 'redux-saga/effects';
import {columnsSaga, prayersSaga, loginSaga, registerSaga} from './sagas';

export default function* rootSaga() {
  yield all([registerSaga(), loginSaga(), columnsSaga(), prayersSaga()]);
}
