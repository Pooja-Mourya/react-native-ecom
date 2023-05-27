import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const STATUSES = Object.freeze({
  IDLE: 'idle',
  PENDING: 'Loading',
  SUCCESS: 'success',
  ERROR: 'failed',
});

const initialState = {
  data: [],
  status: '',
  like: 0,
};

export const MyProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
    // setProduct: (state, action) => {
    //   state.data = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.status = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = STATUSES.PENDING;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchData.rejected, state => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const {add} = MyProductSlice.actions;

export default MyProductSlice.reducer;

//thunk learner

export const fetchData = createAsyncThunk('users/fetchByIdStatus', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const apiData = await res.json();
  return apiData;
});

// export function fetchData() {
//   return async function fetchAPIData(dispatch, getState) {
//     dispatch(setStatus(STATUSES.PENDING));
//     try {
//       const res = await fetch('https://fakestoreapi.com/products');
//       const apiData = await res.json();
//       dispatch(setProduct(apiData));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
