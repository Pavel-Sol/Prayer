import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import {addPrayerApi, getPrayersApi, deletePrayerApi} from '../services/api';
import {
  CreatePrayerActionType,
  PrayerType,
  DeletePrayerActionType,
} from '../../types/types';
import {
  getPrayersAction,
  createPrayerAction,
  deletePrayerAction,
} from './../actions';
import {setPrayers, addPrayer, deletePrayer} from '../reducers';

function* fetchPrayersSaga() {
  try {
    const response: AxiosResponse<PrayerType[]> = yield call(getPrayersApi);
    // console.log('fetchPrayersSaga response ', response.data);
    yield put(setPrayers({prayers: response.data}));
  } catch (error) {
    console.log(error);
  }
}

function* createPrayerSaga(action: CreatePrayerActionType) {
  try {
    const response: AxiosResponse<PrayerType> = yield call(() => {
      return addPrayerApi(action.payload.prayer);
    });
    // console.log('createPrayerSaga response-data ', response.data);
    yield put(addPrayer(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* deletePrayerSaga(action: DeletePrayerActionType) {
  try {
    yield call(() => deletePrayerApi(action.payload.id));
    yield put(deletePrayer(action.payload.id));
  } catch (e: any) {
    console.log(e.message);
  }
}

function* prayersSaga() {
  yield takeEvery(createPrayerAction, createPrayerSaga);
  yield takeEvery(getPrayersAction, fetchPrayersSaga);
  yield takeEvery(deletePrayerAction, deletePrayerSaga);
}

export default prayersSaga;
