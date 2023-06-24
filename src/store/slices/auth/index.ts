import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Credentials, InitialState } from './types';

const initialState = {
  user: null,
  isLoggedIn: false,
} as InitialState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<Credentials>) => {
      state.user = payload.user;
      state.isLoggedIn = payload.isLoggedIn;
    },
  },
  extraReducers: () => {},
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
