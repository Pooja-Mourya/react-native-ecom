import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: '',
};

export const AuthSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.setItem('token');
    },
    addUser: (state, action) => {
      state.user = localStorage.setItem('user');
    },
    logout: (state, action) => {
      (state.token = null), localStorage.clear('token');
    },
  },
  extraReducers: {
    //**************************signUp******************************//
    // [signUpAPI.pending]: state => {
    //   state.loading = true;
    // },
    // [signUpAPI.fulfilled]: (state, {payload: {msg, error}}) => {
    //   state.loading = false;
    //   if (error) {
    //     state.error = error;
    //   } else {
    //     state.msg = msg;
    //   }
    // },
    // [signUpAPI.rejected]: state => {
    //   state.loading = true;
    // },
    //**************************signIn******************************//
    // [signInAPI.pending]: state => {
    //   state.loading = true;
    // },
    // [signInAPI.fulfilled]: (state, {payload: {error, msg, user, token}}) => {
    //   state.loading = false;
    //   if (error) {
    //     state.error = error;
    //   } else {
    //     state.user = user;
    //     state.msg = msg;
    //     state.token = token;
    //     localStorage.setItem('msg', msg);
    //     localStorage.setItem('user', json.stringify(user));
    //     localStorage.setItem('token', token);
    //   }
    // },
    // [signInAPI.rejected]: state => {
    //   state.loading = true;
    // },
  },
});

export const {add} = AuthSlice.actions;

export default AuthSlice.reducer;

//thunk learner

// export const signUpAPI = createAsyncThunk('users/signUpAPi', async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'post',
//     headers: {
//       'Content-type': 'Application/json',
//     },
//     body: json.stringify(body),
//   });
//   const apiData = await res.json();
//   return apiData;
// });

export const signInAPI = createAsyncThunk('users/signUpAPi', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'get',
    headers: {
      'Content-type': 'Application/json',
    },
    body: json.stringify(body),
  });
  const apiData = await res.json();
  return apiData;
});
