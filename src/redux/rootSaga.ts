import {all} from 'redux-saga/effects';
import {columnsSaga} from './column';
import {prayersSaga} from './prayer';
import {loginSaga} from './user';
import {registerSaga} from './user';

export default function* rootSaga() {
  yield all([registerSaga(), loginSaga(), columnsSaga(), prayersSaga()]);
}
