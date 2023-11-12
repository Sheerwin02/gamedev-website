// redux/authSlice.ts

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
// Selector to get the token from the state

const selectAuth = (state: RootState) => state.auth;

export const selectToken = createSelector(
  selectAuth,
  (auth) => auth.token
);

export default authSlice.reducer;
