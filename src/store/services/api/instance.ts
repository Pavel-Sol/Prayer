import axios, {AxiosError} from 'axios';
import {localStorage} from '../localStorage/localStorage';

export const commonInstance = axios.create({
  baseURL: 'https://prayer.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

commonInstance.interceptors.request.use(async config => {
  const token = await localStorage.getToken();
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${token}`;

  return config;
}),
  (error: AxiosError) => {
    return Promise.reject(error);
  };

export const authInstance = axios.create({
  baseURL: 'https://prayer.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
