import {CreateCommentType, UpdateCommentType} from './../../../types/types';
import {
  CreatePrayerType,
  UpdatePrayerType,
  CreateColumnType,
} from '../../../types/types';
import {commonInstance, authInstance} from './instance';

type UserProps = {
  email: string;
  password: string;
};

export const API = {
  loginUser: (user: UserProps) => {
    return authInstance.post('auth/sign-in/', user);
  },
  registerUser: (user: UserProps) => {
    return authInstance.post('auth/sign-up/', user);
  },
  getColumns: () => {
    return commonInstance.get('columns');
  },

  addColumn: (column: CreateColumnType) => {
    return commonInstance.post('columns', column);
  },

  getOneColumn: (columnId: number) => {
    return commonInstance.get(`columns/${columnId}`);
  },

  getPrayers: () => {
    return commonInstance.get('prayers');
  },

  addPrayer: (prayer: CreatePrayerType) => {
    return commonInstance.post('prayers', prayer);
  },

  deletePrayer: (prayerId: number) => {
    return commonInstance.delete(`prayers/${prayerId}`);
  },

  getOnePrayer: (prayerId: number) => {
    return commonInstance.get(`prayers/${prayerId}`);
  },

  updatePrayer: (updatedPrayer: UpdatePrayerType) => {
    return commonInstance.put(`prayers/${updatedPrayer.id}`, updatedPrayer);
  },

  getComments: () => {
    return commonInstance.get('comments');
  },

  addComment: (comment: CreateCommentType) => {
    return commonInstance.post('comments', comment);
  },
  getOneComment: (commentId: number) => {
    return commonInstance.get(`comments/${commentId}`);
  },

  updateComment: (updatedComment: UpdateCommentType) => {
    return commonInstance.put(`comments/${updatedComment.id}`, updatedComment);
  },

  deleteComment: (commentId: number) => {
    return commonInstance.delete(`comments/${commentId}`);
  },
};
