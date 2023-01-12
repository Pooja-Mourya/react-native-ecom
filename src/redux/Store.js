import {configureStore} from '@reduxjs/toolkit';
import LoginUserReducer from './slice/UserSlice';

export const Store = configureStore({
  reducer: {
    user: LoginUserReducer,
  },
});
