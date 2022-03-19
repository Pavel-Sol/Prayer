import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userName: '',
    userId: 123,
    isLoading: false,
  },
  reducers: {
    login(state, {payload}: PayloadAction<{userName: string; userId: number}>) {
      // console.log('payload.userName', payload.userName);
      state.isAuth = true;
      state.userName = payload.userName;
      state.userId = payload.userId;
    },
    logout(state) {
      state.isAuth = false;
      state.userName = '';
      state.userId = 123;
    },
    loading(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const {login, logout, loading} = userSlice.actions;
export default userSlice.reducer;
