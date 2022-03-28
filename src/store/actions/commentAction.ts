import { CreateCommentType, UpdateCommentType } from './../../types/types';
import {createAction} from '@reduxjs/toolkit';
export const getCommentsAction = createAction('getComments');

export const createCommentAction = createAction(
  'createComment',
  (comment: CreateCommentType) => {
    return {
      payload: {
        comment,
      },
    };
  },
);

export const updateCommentAction = createAction(
  'updateComment',
  (comment: UpdateCommentType) => {
    return {
      payload: {
        comment,
      },
    };
  },
);
