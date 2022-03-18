import axios, {AxiosResponse} from 'axios';
import {AuthSignInResponse, AuthSignUpResponse} from '../types/types';

type UserProps = {
  email: string;
  password: string;
};

export const loginUser = (user: UserProps) => {
  return axios.post('https://prayer.herokuapp.com/auth/sign-in/', user);
};

export const registerUser = (user: UserProps) => {
  return axios.post('https://prayer.herokuapp.com/auth/sign-up/', user);
};
