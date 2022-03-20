import {RootState} from './../redux/store';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {localStorage} from '../services/localStorage';

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

export const getColumnsApi = async () => {
  const token = await localStorage.getToken();

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  return axios.get('https://prayer.herokuapp.com/columns', config);
};
