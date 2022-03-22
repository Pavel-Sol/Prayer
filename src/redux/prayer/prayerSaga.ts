import {getPrayersApi} from './../../api/api';
import {PrayerType} from './../../types/types';
import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getPrayersAction} from './actions';
import {setPrayers} from './prayerSlice';

function* fetchPrayersSaga() {
  try {
    const response: AxiosResponse<PrayerType[]> = yield call(getPrayersApi);

    console.log('fetchPrayersSaga response ', response.data);
    yield put(setPrayers({prayers: response.data}));
  } catch (error) {
    console.log(error);
  }
}

function* prayersSaga() {
  yield takeEvery(getPrayersAction, fetchPrayersSaga);
}

export default prayersSaga;
