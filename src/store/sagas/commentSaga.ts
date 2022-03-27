import {CommentType, CreateCommentActionType} from './../../types/types';
import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getCommentsAction, createCommentAction} from './../actions';
import {getCommentsApi, addCommentApi, getOneCommentApi} from '../services/api';
import {setComments, addComment} from '../reducers';

function* fetchCommentsSaga() {
  try {
    const response: AxiosResponse<CommentType[]> = yield call(getCommentsApi);
    yield put(setComments(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* createCommentSaga(action: CreateCommentActionType) {
  const createCommentResponse: AxiosResponse<CommentType> = yield call(() => {
    return addCommentApi(action.payload.comment);
  });

  const getOneCommentResponse: AxiosResponse<CommentType> = yield call(() => {
    return getOneCommentApi(createCommentResponse.data.id);
  });

  yield put(addComment(getOneCommentResponse.data));

  try {
  } catch (error) {
    console.log(error);
  }
}

function* commentsSaga() {
  yield takeEvery(getCommentsAction, fetchCommentsSaga);
  yield takeEvery(createCommentAction, createCommentSaga);
}

export default commentsSaga;
