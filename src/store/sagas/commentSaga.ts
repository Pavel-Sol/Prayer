import {
  CommentType,
  CreateCommentActionType,
  UpdateCommentActionType,
} from './../../types/types';
import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getCommentsAction,
  createCommentAction,
  updateCommentAction,
} from './../actions';
import {API} from '../services/api';
import {setComments, addComment, updateComment} from '../reducers';

function* fetchCommentsSaga() {
  try {
    const response: AxiosResponse<CommentType[]> = yield call(API.getComments);
    yield put(setComments(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* createCommentSaga(action: CreateCommentActionType) {
  const createCommentResponse: AxiosResponse<CommentType> = yield call(() => {
    return API.addComment(action.payload.comment);
  });

  const getOneCommentResponse: AxiosResponse<CommentType> = yield call(() => {
    return API.getOneComment(createCommentResponse.data.id);
  });

  yield put(addComment(getOneCommentResponse.data));

  try {
  } catch (error) {
    console.log(error);
  }
}

function* updateCommentSaga(action: UpdateCommentActionType) {
  try {
    const response: AxiosResponse<CommentType> = yield call(() => {
      return API.updateComment(action.payload.comment);
    });

    yield put(updateComment(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* commentsSaga() {
  yield takeEvery(getCommentsAction, fetchCommentsSaga);
  yield takeEvery(createCommentAction, createCommentSaga);
  yield takeEvery(updateCommentAction, updateCommentSaga);
}

export default commentsSaga;
