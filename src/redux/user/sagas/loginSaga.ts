import {AxiosResponse} from 'axios';
import {loginUser} from './../../../api/authApi';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {AuthSignInResponse, LoginUserActionType} from '../../../types/types';
import {login} from '../userSlice';
import {loginUserAction} from '../../actions';
import {localStorage} from '../../../services/localStorage';

function* signInWorkerSaga(action: LoginUserActionType) {
  try {
    const response: AxiosResponse<AuthSignInResponse> = yield call(() =>
      loginUser(action.payload.user),
    );

    // console.log('res loginSaga ', response.data);
    yield put(login({userName: response.data.name, userId: response.data.id}));
    yield call(() => {
      localStorage.saveToken(response.data.token);
    });
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeEvery(loginUserAction, signInWorkerSaga);
}

export default loginSaga;
