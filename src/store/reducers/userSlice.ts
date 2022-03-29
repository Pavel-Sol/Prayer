import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialUserStateType = {
  userToken: string;
  isLoading: boolean;
  error: string | null;
};
const initialState: InitialUserStateType = {
  userToken: '',
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
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
    setError(state, {payload}: PayloadAction<string | null>) {
      state.error = payload;
    },
  },
});

export const {login, logout, loading, setError} = userSlice.actions;
export default userSlice.reducer;
