import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const getComments = (state: RootState) => state.comment.comments;

export const selectComments = (prayerId: number) => {
  return createSelector(getComments, comments =>
    comments.filter(item => item.prayerId === prayerId),
  );
};
