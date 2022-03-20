import {getColumnsApi} from './../../api/api';
import {ColumnType} from './../../types/types';
import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getColumnsAction} from './actions';
import {setColumns} from './columnSlice';

function* fetchColumnsSaga() {
  try {
    const response: AxiosResponse<ColumnType[]> = yield call(getColumnsApi);
    yield put(setColumns({columns: response.data}));
  } catch (error) {
    console.log(error);
  }
}

function* columnsSaga() {
  yield takeEvery(getColumnsAction, fetchColumnsSaga);
}

export default columnsSaga;
