import {CommentType} from './../../types/types';
import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getCommentsAction} from './../actions';
import {getCommentsApi} from '../services/api';
import {setComments} from '../reducers';

function* fetchCommentsSaga() {
  try {
    const response: AxiosResponse<CommentType[]> = yield call(getCommentsApi);

    //  console.log('fetchCommentsSaga res ', response.data);
    yield put(setComments(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* commentsSaga() {
  yield takeEvery(getCommentsAction, fetchCommentsSaga);
}

export default commentsSaga;
