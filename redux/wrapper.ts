// redux/wrapper.ts

import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { configureStore, Store } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import authReducer from './authSlice';

// Define the type of your root state
interface RootState {
  auth: ReturnType<typeof authReducer>;
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const makeStore: MakeStore<Store<RootState>> = () =>
  configureStore({
    reducer: {
      auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
  });

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });
