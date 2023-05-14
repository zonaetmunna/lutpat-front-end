import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import { RootState } from "../../app/store";


interface CartProduct {
    _id?: string;
    name: string;
    category: {
        _id?: string;
        name: string;
    };
    description: string;
    image: string;
    price: number;
    store: string;
    quantity: number;
}

interface ICartState {
    items: CartProduct[];
}


const initialState: ICartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartProduct>) => {
            const itemIndex = state.items.findIndex(
                (item) => item._id === action.payload._id
            );

            if (itemIndex >= 0) {
                // If the item is already in the cart, increase the quantity
                state.items[itemIndex].quantity += action.payload.quantity;
            } else {
                // Otherwise, add the item to the cart
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item._id !== action.payload);
        },
        updateItemQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const itemIndex = state.items.findIndex(
                (item) => item._id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;