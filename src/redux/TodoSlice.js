import {createSlice, nanoid} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    reducer: (state, action) => {
      state.push(action.payload);
    },
    //   prepare: text => {
    //     const id = nanoid();
    //     return {payload: {id, text}};
    //   },
  },
});

export const {reducer} = todosSlice.actions;
export default todosSlice.reducer;
