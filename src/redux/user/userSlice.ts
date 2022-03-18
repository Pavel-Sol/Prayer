import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userName: '',
    userId: 123,
  },
  reducers: {
    login(state, {payload}: PayloadAction<{userName: string; userId: number}>) {
      // console.log('payload.userName', payload.userName);
      state.isAuth = true;
      state.userName = payload.userName;
      state.userId = payload.userId;
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
