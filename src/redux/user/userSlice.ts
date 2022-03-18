import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userName: '',
    userId: 123,
  },
  reducers: {
    login(state, {payload}: PayloadAction<{userName: string}>) {
      console.log('payload.userName', payload.userName);
      state.isAuth = true;
      state.userName = payload.userName;
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
