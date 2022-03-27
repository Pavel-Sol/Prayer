import {CreateCommentType} from './../../../types/types';
import {
  CreatePrayerType,
  PrayerType,
  UpdatePrayerType,
} from '../../../types/types';
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

export const getPrayersApi = () => {
  return commonInstance.get('prayers');
};

export const addPrayerApi = (prayer: CreatePrayerType) => {
  return commonInstance.post('prayers', prayer);
};

export const deletePrayerApi = (prayerId: number) => {
  return commonInstance.delete(`prayers/${prayerId}`);
};

export const getOnePrayerApi = (prayerId: number) => {
  return commonInstance.get(`prayers/${prayerId}`);
};

export const updatePrayerApi = (updatedPrayer: UpdatePrayerType) => {
  return commonInstance.put(`prayers/${updatedPrayer.id}`, updatedPrayer);
};

export const getCommentsApi = () => {
  return commonInstance.get('comments');
};
export const addCommentApi = (comment: CreateCommentType) => {
  return commonInstance.post('comments', comment);
};

export const getOneCommentApi = (commentId: number) => {
  return commonInstance.get(`comments/${commentId}`);
};
