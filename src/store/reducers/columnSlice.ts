import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ColumnType} from '../../types/types';

type InitialColumnStateType = {
  columns: ColumnType[];
};

const initialState: InitialColumnStateType = {
  columns: [],
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setColumns(state, {payload}: PayloadAction<{columns: ColumnType[]}>) {
      state.columns = payload.columns;
    },
    addColumn(state, {payload}: PayloadAction<ColumnType>) {
      state.columns = [...state.columns, payload];
    },
  },
});

export const {setColumns, addColumn} = columnSlice.actions;
export default columnSlice.reducer;
