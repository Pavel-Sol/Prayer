import {all} from 'redux-saga/effects';
import loginSaga from './user/sagas/loginSaga';
import registerSaga from './user/sagas/registerSaga';

export default function* rootSaga() {
  yield all([registerSaga(), loginSaga()]);
}
