import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";



interface IWishlistState {
    wishlist: IProduct[];
}

const initialState: IWishlistState = {
    wishlist: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (item) => item._id !== action.payload
            );
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;