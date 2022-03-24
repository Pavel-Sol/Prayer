import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import {getPrayersApi} from '../services/api';
import {PrayerType} from '../../types/types';
import {getPrayersAction} from './../actions';
import {setPrayers} from '../reducers/prayerSlice';

function* fetchPrayersSaga() {
  try {
    const response: AxiosResponse<PrayerType[]> = yield call(getPrayersApi);

    // console.log('fetchPrayersSaga response ', response.data);
    yield put(setPrayers({prayers: response.data}));
  } catch (error) {
    console.log(error);
  }
}

function* prayersSaga() {
  yield takeEvery(getPrayersAction, fetchPrayersSaga);
}

export default prayersSaga;
