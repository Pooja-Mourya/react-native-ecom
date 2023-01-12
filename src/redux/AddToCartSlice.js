import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  wishlist: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const AddToCartSlice = createSlice({
  name: 'toCart',
  initialState,
  reducers: {
    addToCartMy(state, action) {
      let index = state.wishlist.findIndex((e, i) => {
        // console.log('e.id === action.payload.id,', e.id, action.payload.id);
        return e.id === action.payload.id;
        // e.id === action.payload.id; wrong method
      });
      console.log('action', state.wishlist);
      if (index >= 0) {
        state.wishlist[index].quantity += 1;
        state.cartTotalAmount += action.payload.price;
      } else {
        let temProductItem = {...action.payload, quantity: 1};
        state.wishlist.push(temProductItem);
      }
    },
    removeItem: (state, action) => {
      const dltIndex = state.wishlist.findIndex(
        item => item.id != action.payload,
      );
      state.wishlist.splice(dltIndex, 1);
      //   if (state.wishlist[dltIndex].quantity > 1) {
      //     state.wishlist[dltIndex].cartTotalQuantity -= 1;
      //   } else if (state.wishlist[dltIndex].cartTotalQuantity === 1) {
      //     const nextCartItems = state.wishlist.filter(
      //       item => item.id !== action.payload,
      //     );
      //     state.wishlist = nextCartItems;
      //   }
    },
    removeFromCart(state, action) {
      let index = state.wishlist.findIndex((e, i) => {
        return e.id === action.payload.id;
      });
      if (state.wishlist[index].quantity > 1) {
        state.wishlist[index].quantity -= 1;
        state.cartTotalAmount -= action.payload.price;
      } else if (state.wishlist[index].quantity === 1) {
        state.cartTotalQuantity = 1;
        state.wishlist.filter(() => action.payload);
      }
    },

    getTotals(state, action) {
      let {total, quantity} = state.wishlist.reduce(
        (cartTotal, cartItem) => {
          const {price, quantity} = cartItem;
          const total = price * quantity;

          cartTotal.total += total;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    removeAll(state, action) {
      state.wishlist = [];
    },
  },
});

export const {
  addToCartMy,
  removeAll,
  removeItem,
  getTotals,
  removeFromCart,
} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
