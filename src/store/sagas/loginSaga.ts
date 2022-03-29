import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from '@redux-saga/core/effects';

import {API} from '../services/api';
import {AuthSignInResponse, LoginUserActionType} from '../../types/types';
import {loading, login, setError} from './../reducers';
import {loginUserAction} from './../actions';
import {localStorage} from '../services/localStorage';

function* signInWorkerSaga(action: LoginUserActionType) {
  try {
    yield put(setError(null));
    yield put(loading(true));
    const response: AxiosResponse<AuthSignInResponse> = yield call(() =>
      API.loginUser(action.payload.user),
    );

    if (response.data?.message) {
      yield put(setError('please check your password or email'));
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

function* loginSaga() {
  yield takeEvery(loginUserAction, signInWorkerSaga);
}

export default loginSaga;
