import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginUser: [],
};

export const LoginFirebaseSlice = createSlice({
  name: 'loginAuth',
  initialState,
  reducers: {
    findUserShowDetail: (state, action) => {
      state.loginUser = action.payload;
    },
  },
});
export const {findUserShowDetail} = LoginFirebaseSlice.actions;

export default LoginFirebaseSlice.reducer;
