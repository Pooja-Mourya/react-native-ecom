import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  search: '',
  fetchData: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchHandle: (state, action) => {
      state.search.includes(action.payload, 'searchFunction');
    },
  },
});

export const {searchHandle} = searchSlice.actions;
export default searchSlice.reducer;
