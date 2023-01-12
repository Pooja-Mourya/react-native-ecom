import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './ProductSlice';
import CartReducer from './CartSlice';
import AuthReducer from './AuthSlice';
import WishlistReducer from './AddToCartSlice';
import LoginUserReducer from './LoginFirbaseSlice';
export const Store = configureStore({
  reducer: {
    product: ProductReducer,
    toCart: CartReducer,
    auth: AuthReducer,
    wishlist: WishlistReducer,
    loginAuth: LoginUserReducer,
  },
});

export default Store;
