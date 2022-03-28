import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import {API} from '../services/api';
import {
  CreatePrayerActionType,
  PrayerType,
  DeletePrayerActionType,
  UpdatePrayerActionType,
} from '../../types/types';
import {
  getPrayersAction,
  createPrayerAction,
  deletePrayerAction,
  updatePrayerAction,
} from './../actions';
import {setPrayers, addPrayer, deletePrayer, updatePrayer} from '../reducers';

function* fetchPrayersSaga() {
  try {
    const response: AxiosResponse<PrayerType[]> = yield call(API.getPrayers);
    yield put(setPrayers({prayers: response.data}));
  } catch (error) {
    console.log(error);
  }
}

function* createPrayerSaga(action: CreatePrayerActionType) {
  try {
    const createPrayerResponse: AxiosResponse<PrayerType> = yield call(() => {
      return API.addPrayer(action.payload.prayer);
    });

    const getOnePrayerResponse: AxiosResponse<PrayerType> = yield call(() => {
      return API.getOnePrayer(createPrayerResponse.data.id);
    });

    yield put(addPrayer(getOnePrayerResponse.data));
  } catch (error) {
    console.log(error);
  }
}

function* deletePrayerSaga(action: DeletePrayerActionType) {
  try {
    yield call(() => API.deletePrayer(action.payload.id));
    yield put(deletePrayer(action.payload.id));
  } catch (e) {
    console.log(e);
  }
}

function* updatePrayerSaga(action: UpdatePrayerActionType) {
  try {
    const response: AxiosResponse<PrayerType> = yield call(() => {
      return API.updatePrayer(action.payload.prayer);
    });

    yield put(updatePrayer(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* prayersSaga() {
  yield takeEvery(createPrayerAction, createPrayerSaga);
  yield takeEvery(getPrayersAction, fetchPrayersSaga);
  yield takeEvery(deletePrayerAction, deletePrayerSaga);
  yield takeEvery(updatePrayerAction, updatePrayerSaga);
}

export default prayersSaga;
