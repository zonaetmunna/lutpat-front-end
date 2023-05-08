import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";


/* interface IWishlist {
    _id?: string;
    productId: string;
}; */

interface IWishlistState {
    wishlistItems: IProduct[];
}

const initialState: IWishlistState = {
    wishlistItems: [],
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<IProduct>) => {
            state.wishlistItems.push(action.payload);
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            state.wishlistItems = state.wishlistItems.filter(item => item._id !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;