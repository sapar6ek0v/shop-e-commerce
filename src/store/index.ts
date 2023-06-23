import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import { baseApi } from './apis';
import authReducer from './slices/auth';
import productsReducer from './slices/products';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  [baseApi.reducerPath]: baseApi.reducer
});

const persistConfig = {
  key: 'root',
  storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([baseApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production'
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
