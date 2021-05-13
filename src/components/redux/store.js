import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './reducers/counterSlice.js';
import signUpSlice from './slices/signUpSlice';

export const store = configureStore({
  reducer: {
    userSignUp: signUpSlice
  },
});