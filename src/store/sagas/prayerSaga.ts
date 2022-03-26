import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import {
  addPrayerApi,
  getPrayersApi,
  deletePrayerApi,
  getOnePrayerApi,
  updatePrayerApi,
} from '../services/api';
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
    const response: AxiosResponse<PrayerType[]> = yield call(getPrayersApi);
    yield put(setPrayers({prayers: response.data}));
  } catch (error) {
    console.log(error);
  }
}

function* createPrayerSaga(action: CreatePrayerActionType) {
  try {
    const createPrayerResponse: AxiosResponse<PrayerType> = yield call(() => {
      return addPrayerApi(action.payload.prayer);
    });

    const getOnePrayerResponse: AxiosResponse<PrayerType> = yield call(() => {
      return getOnePrayerApi(createPrayerResponse.data.id);
    });

    yield put(addPrayer(getOnePrayerResponse.data));
  } catch (error) {
    console.log(error);
  }
}

function* deletePrayerSaga(action: DeletePrayerActionType) {
  try {
    yield call(() => deletePrayerApi(action.payload.id));
    yield put(deletePrayer(action.payload.id));
  } catch (e) {
    console.log(e);
  }
}

function* updatePrayerSaga(action: UpdatePrayerActionType) {
  try {
    const response: AxiosResponse<PrayerType> = yield call(() => {
      return updatePrayerApi(action.payload.prayer);
    });

    console.log(response.data);
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
