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
      state.prayers = [payload, ...state.prayers];
    },
    deletePrayer(state, {payload}: PayloadAction<number>) {
      state.prayers = state.prayers.filter(prayer => prayer.id !== payload);
    },
    updatePrayer(state, {payload}: PayloadAction<PrayerType>) {
      state.prayers = state.prayers.map(el => {
        if (el.id === payload.id) {
          return payload;
        } else {
          return el;
        }
      });
    },
  },
});

export const {setPrayers, addPrayer, deletePrayer, updatePrayer} =
  prayerSlice.actions;
export default prayerSlice.reducer;
