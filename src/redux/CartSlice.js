import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'toCart',
  initialState,
  reducers: {
    addToFav(state, action) {
      let index = state.items.findIndex((e, i) => {
        e.id === action.payload.id;
      });
      if (index >= 0) {
        alert('item available in cart');
      } else {
        state.items.push(action.payload);
      }
    },
    removeToFav(state, action) {
      //   let index = state.items.findIndex((e, i) => e.id == action.payload.id);
      //   if (index >= 0) {
      let temp = state.items;
      // let new_arr = temp?.filter(e => e.id != action.payload.id);
      // let new_arr = temp?.shift(1);
      // let a = [1, 2, 3, 4].splice(0, 0);
      // console.log('new_arr', a);
      state.items = temp.splice(action.payload.id, 1);
      //   } else {
      //     //   state.items.push(action.payload);
      //   }
    },
  },
});

export const {addToFav, removeToFav} = CartSlice.actions;
export default CartSlice.reducer;
