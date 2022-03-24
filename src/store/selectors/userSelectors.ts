import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const getToken = (state: RootState) => state.user.userToken;
const getUserLoading = (state: RootState) => state.user.isLoading;

export const selectToken = createSelector(getToken, token => token);
export const selectUserLoading = createSelector(
  getUserLoading,
  isLoading => isLoading,
);
