import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const getComments = (state: RootState) => state.comment.comments;

// получение списка comments в соответствии с prayerId
export const selectComments = (prayerId: number) => {
  return createSelector(getComments, comments =>
    comments.filter(item => item.prayerId === prayerId),
  );
};
