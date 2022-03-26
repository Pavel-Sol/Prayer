import {createAction} from '@reduxjs/toolkit';
import {CreatePrayerType} from '../../types/types';

export const getPrayersAction = createAction('getPrayers');

export const createPrayerAction = createAction(
  'createPrayer',
  (prayer: CreatePrayerType) => {
    return {
      payload: {
        prayer,
      },
    };
  },
);

export const deletePrayerAction = createAction('deletePrayer', (id: number) => {
  return {
    payload: {
      id,
    },
  };
});
