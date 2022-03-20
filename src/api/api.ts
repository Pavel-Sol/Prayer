import {commonInstance, authInstance} from './instance';

type UserProps = {
  email: string;
  password: string;
};

export const loginUserApi = (user: UserProps) => {
  return authInstance.post('auth/sign-in/', user);
};

export const registerUserApi = (user: UserProps) => {
  return authInstance.post('auth/sign-up/', user);
};

export const getColumnsApi = () => {
  return commonInstance.get('columns');
};
