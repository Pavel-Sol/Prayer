import {all} from 'redux-saga/effects';
import columnsSaga from './column/columnSaga';
import prayersSaga from './prayer/prayerSaga';
import loginSaga from './user/sagas/loginSaga';
import registerSaga from './user/sagas/registerSaga';

export default function* rootSaga() {
  yield all([registerSaga(), loginSaga(), columnsSaga(), prayersSaga()]);
}
