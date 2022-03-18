import {AxiosResponse} from 'axios';
import {loginUser} from './../../../api/authApi';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {AuthSignInResponse, LoginUserActionType} from '../../../types/types';
import {login} from '../userSlice';
import {loginUserAction} from '../../actions';

import AsyncStorage from '@react-native-async-storage/async-storage';

function* signInWorkerSaga(action: LoginUserActionType) {
  try {
    const response: AxiosResponse<AuthSignInResponse> = yield call(() =>
      loginUser(action.payload.user),
    );

    console.log('res loginsaga ', response.data);
    yield put(login({userName: response.data.name, userId: response.data.id}));
    yield call(() => {
      try {
        AsyncStorage.setItem('token', response.data.token);
      } catch (error) {
        console.log('error saveToken ', error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeEvery(loginUserAction, signInWorkerSaga);
}

export default loginSaga;
