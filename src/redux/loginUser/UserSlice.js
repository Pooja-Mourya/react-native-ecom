import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginUser: {},
};

export const UserSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    useDetailAction: (state, action) => {
      state.loginUser = action.payload;
    },
  },
});
export const {useDetailAction} = UserSlice.actions;

export default UserSlice.reducer;
