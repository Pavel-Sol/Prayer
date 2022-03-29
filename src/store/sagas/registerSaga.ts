import {call, put, takeEvery} from '@redux-saga/core/effects';
import {AxiosResponse} from 'axios';

import {API} from '../services/api';
import {AuthSignInResponse, RegisterUserActionType} from '../../types/types';
import {registerUserAction} from '../actions';
import {loading, login, setError} from '../reducers';
import {localStorage} from '../services/localStorage';

function* signUpWorkerSaga(action: RegisterUserActionType) {
  try {
    yield put(setError(null));
    yield put(loading(true));
    const response: AxiosResponse<AuthSignInResponse> = yield call(() =>
      API.registerUser(action.payload.user),
    );
    if (response.data?.message) {
      yield put(setError('please check your password, email or name'));
    } else {
      yield put(login({userToken: response.data.token}));
      yield call(() => {
        localStorage.saveToken(response.data.token);
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(loading(false));
  }
}

function* registerSaga() {
  yield takeEvery(registerUserAction, signUpWorkerSaga);
}

export default registerSaga;
