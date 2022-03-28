import {CommentType} from './../../types/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialCommentStateType = {
  comments: CommentType[];
};

const initialState: InitialCommentStateType = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComments(state, {payload}: PayloadAction<CommentType[]>) {
      state.comments = payload;
    },
    addComment(state, {payload}: PayloadAction<CommentType>) {
      state.comments = [...state.comments, payload];
    },
  },
});

export const {setComments, addComment} = commentSlice.actions;
export default commentSlice.reducer;
