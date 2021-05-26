import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const getStore = () => configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const store = getStore();
