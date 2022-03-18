import {call, put, takeEvery} from '@redux-saga/core/effects';
import {authApi} from '../../../api/authApi';
import {AuthSignUpResponse} from '../../../types/types';

export const signUpAction = (
  email: string,
  name: string,
  password: string,
) => ({
  type: 'SAGA/SIGN_UP',
  email,
  name,
  password,
});

function* signUpWorkerSaga(action: ReturnType<typeof signUpAction>) {
  try {
    const res: AuthSignUpResponse = yield call(
      authApi.signUp,
      action.email,
      action.name,
      action.password,
    );

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function* registerSaga() {
  yield takeEvery('SAGA/SIGN_UP', signUpWorkerSaga);
}

export default registerSaga;
