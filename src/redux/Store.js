import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './ProductSlice';
import CartReducer from './CartSlice';
import AuthReducer from './AuthSlice';
import WishlistReducer from './AddToCartSlice';
import LoginReducer from './loginUser/UserSlice';
export const Store = configureStore({
  reducer: {
    product: ProductReducer,
    toCart: CartReducer,
    auth: AuthReducer,
    wishlist: WishlistReducer,
    loginAuth: LoginReducer,
  },
});

export default Store;
