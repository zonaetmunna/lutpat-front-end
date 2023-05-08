import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authReducer from '../features/auth/authSlice';
import cartSlice from '../features/cart/cartSlice';
import wishlistSlice from '../features/wishList/wishlistSlice';
// import filterSlice from '../features/filter/filterSlice';

// import userReducer from './slices/userSlice';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartSlice,
    wishlist: wishlistSlice,
    // filter: filterSlice

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
