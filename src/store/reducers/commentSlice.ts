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
    deleteComment(state, {payload}: PayloadAction<number>) {
      state.comments = state.comments.filter(comment => comment.id !== payload);
    },
    updateComment(state, {payload}: PayloadAction<CommentType>) {
      state.comments = state.comments.map(el => {
        if (el.id === payload.id) {
          return payload;
        } else {
          return el;
        }
      });
    },
  },
});

export const {setComments, addComment, updateComment, deleteComment} =
  commentSlice.actions;
export default commentSlice.reducer;
