import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'products/fetchUserById',
  async () => {
    const res = await axios.get('https://fakestoreapi.com/products', {
      withCredentials: true,
    });
    return res;
  },
);
const initialState = {
  entities: [],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};
export const counterSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},

  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
  // extraReducers: {
  //   [fetchUserById.pending]: state => {
  //     state.status = 'loading';
  //   },
  //   [fetchUserById.fulfilled]: (state, {payload}) => {
  //     console.log('produtcts payload: ', payload);
  //     state.items = payload;
  //     state.status = 'success';
  //   },
  //   [fetchUserById.rejected]: state => {
  //     state.status = 'failed';
  //   },
  // },
});

export const {addCase} = counterSlice.actions;

export default counterSlice.reducer;
