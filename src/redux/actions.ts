import {createAction} from '@reduxjs/toolkit';
import {UserProps} from '../types/types';

export const loginUserAction = createAction('loginUser', (user: UserProps) => {
  return {
    payload: {
      user,
    },
  };
});

export const registerUserAction = createAction(
  'registerUser',
  (user: UserProps) => {
    return {
      payload: {
        user,
      },
    };
  },
);
