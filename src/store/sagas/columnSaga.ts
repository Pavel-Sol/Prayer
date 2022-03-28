import {CreateColumnActionType} from './../../types/types';
import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';

import {API} from '../services/api';
import {ColumnType} from '../../types/types';
import {getColumnsAction, createColumnAction} from './../actions';
import {addColumn, setColumns} from '../reducers';

function* fetchColumnsSaga() {
  try {
    const response: AxiosResponse<ColumnType[]> = yield call(API.getColumns);
    yield put(setColumns({columns: response.data}));
  } catch (error) {
    console.log(error);
  }
}

function* createColumnSaga(action: CreateColumnActionType) {
  const createColumnResponse: AxiosResponse<ColumnType> = yield call(() => {
    return API.addColumn(action.payload.column);
  });

  const getOneColumnResponse: AxiosResponse<ColumnType> = yield call(() => {
    return API.getOneColumn(createColumnResponse.data.id);
  });

  yield put(addColumn(getOneColumnResponse.data));

  try {
  } catch (error) {
    console.log(error);
  }
}

function* columnsSaga() {
  yield takeEvery(getColumnsAction, fetchColumnsSaga);
  yield takeEvery(createColumnAction, createColumnSaga);
}

export default columnsSaga;
