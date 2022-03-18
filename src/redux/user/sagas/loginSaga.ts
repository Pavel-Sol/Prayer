import {AxiosResponse} from 'axios';
import {loginUser} from './../../../api/authApi';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {authApi} from '../../../api/authApi';
import {AuthSignInResponse, LoginUserActionType} from '../../../types/types';
import {login} from '../userSlice';
import {loginUserAction} from '../../actions';

// export const signInAction = (email: string, password: string) => ({
//   type: 'SAGA/SIGN_IN',
//   email,
//   password,
// });

function* signInWorkerSaga(action: LoginUserActionType) {
  try {
    // const res: AuthSignInResponse = yield call(
    //   authApi.signIn,
    //   action.email,
    //   action.password,
    // );

    // console.log('res loginsaga ', res);
    // yield put(login({userName: res.name}));

    const response: AxiosResponse<AuthSignInResponse> = yield call(() =>
      loginUser(action.payload.user),
    );

    console.log('res loginsaga ', response.data);
    yield put(login({userName: response.data.name}));
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeEvery(loginUserAction, signInWorkerSaga);
}

export default loginSaga;
