import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PrayerType} from '../../types/types';

type InitialPrayerStateType = {
  prayers: PrayerType[];
};

const initialState: InitialPrayerStateType = {
  prayers: [],
};

const prayerSlice = createSlice({
  name: 'prayer',
  initialState,
  reducers: {
    setPrayers(state, {payload}: PayloadAction<{prayers: PrayerType[]}>) {
      state.prayers = payload.prayers
    },
  },
});

export const {setPrayers} = prayerSlice.actions;
export default prayerSlice.reducer;
