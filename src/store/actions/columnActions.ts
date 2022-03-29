import {CreateColumnType} from './../../types/types';
import {createAction} from '@reduxjs/toolkit';

export const getColumnsAction = createAction('getColumns');

export const createColumnAction = createAction(
  'createColumn',
  (column: CreateColumnType) => {
    return {
      payload: {
        column,
      },
    };
  },
);
