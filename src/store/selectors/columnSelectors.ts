import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const getColumns = (state: RootState) => state.column.columns;
export const selectColumns = createSelector(getColumns, columns => columns);

export const selectOneColumn = (columnId: number) => {
  return createSelector(getColumns, columns =>
    columns.find(item => item.id === columnId),
  );
};
