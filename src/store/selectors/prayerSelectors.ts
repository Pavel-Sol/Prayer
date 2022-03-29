import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const getPrayers = (state: RootState) => state.prayer.prayers;

export const selectPrayers = (columnId: number) => {
  return createSelector(getPrayers, prayers =>
    prayers.filter(item => item.columnId === columnId),
  );
};

export const selectOnePrayer = (prayerId: number) => {
  return createSelector(getPrayers, prayers =>
    prayers.find(item => item.id === prayerId),
  );
};
