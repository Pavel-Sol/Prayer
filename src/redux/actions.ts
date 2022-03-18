import {createAction} from '@reduxjs/toolkit';
import {UserProps} from '../types/types';

export const loginUserAction = createAction('loginUser', (user: UserProps) => {
  return {
    payload: {
      user,
    },
  };
});
