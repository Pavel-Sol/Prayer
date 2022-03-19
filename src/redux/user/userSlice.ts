import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userToken: '',
    isLoading: false,
  },
  reducers: {
    login(state, {payload}: PayloadAction<{userToken: string}>) {
      state.userToken = payload.userToken;
    },
    logout(state) {
      state.userToken = '';
    },
    loading(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const {login, logout, loading} = userSlice.actions;
export default userSlice.reducer;
