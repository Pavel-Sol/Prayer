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
      state.prayers = payload.prayers;
    },
    addPrayer(state, {payload}: PayloadAction<PrayerType>) {
      console.log('addPrayer slice', payload);
      state.prayers = [...state.prayers, payload];
    },
    deletePrayer(state, {payload}: PayloadAction<number>) {
      state.prayers = state.prayers.filter(prayer => prayer.id !== payload);
    },
  },
});

export const {setPrayers, addPrayer, deletePrayer} = prayerSlice.actions;
export default prayerSlice.reducer;
