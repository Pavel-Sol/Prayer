import {call, put, takeEvery} from '@redux-saga/core/effects';
import {AxiosResponse} from 'axios';

import {registerUserApi} from '../services/api';
import {AuthSignInResponse, RegisterUserActionType} from '../../types/types';
import {registerUserAction} from '../actions';

function* signUpWorkerSaga(action: RegisterUserActionType) {
  try {
    // console.log('action.payload', action.payload);
    const response: AxiosResponse<AuthSignInResponse> = yield call(() =>
      registerUserApi(action.payload.user),
    );
    console.log('res register ', response.data);
  } catch (error) {
    console.log(error);
  }
}

function* registerSaga() {
  yield takeEvery(registerUserAction, signUpWorkerSaga);
}

export default registerSaga;
