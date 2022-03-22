import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const getPrayers = (state: RootState) => state.prayer.prayers;

// получение списка prayers в соответствии с columnId
export const selectPrayers = (columnId: number) => {
  return createSelector(getPrayers, prayers =>
    prayers.filter(item => item.columnId === columnId),
  );
};
