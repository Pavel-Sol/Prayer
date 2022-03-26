import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import {addPrayerApi, getPrayersApi} from '../services/api';
import {CreatePrayerActionType, PrayerType} from '../../types/types';
import {getPrayersAction, createPrayerAction} from './../actions';
import {setPrayers, addPrayer} from '../reducers';

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

function* prayersSaga() {
  yield takeEvery(createPrayerAction, createPrayerSaga);
  yield takeEvery(getPrayersAction, fetchPrayersSaga);
}

export default prayersSaga;
