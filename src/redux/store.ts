// redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import customerNameReducer from './customerName/reducer';
import customerNameChangeLogReducer from './customerNameChangeLog/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  customerName: customerNameReducer,
  customerNameChangeLog: customerNameChangeLogReducer,
});

// Create the Redux store with combined reducers, middleware, and DevTools extension
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export { store };
