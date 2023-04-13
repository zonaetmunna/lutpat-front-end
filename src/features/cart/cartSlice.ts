import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";


interface CartState {
    cart: {
        _id?: string;
        name: string;
        category: string;
        description: string;
        image: string;
        price: number;
        store: string;
        quantity: number
    }[];
}

const initialState: CartState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const selectedProduct = state.cart.find(
                (product) => product._id === action.payload
            );
            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 };
                state.cart.push(product);
            } else {
                selectedProduct.quantity += 1;
                state.cart
                    .filter((product) => product._id !== selectedProduct._id)
                    .push(selectedProduct);
            }
        },
        removeFromCart: (state, action) => {
            if (action.payload.quantity > 1) {
                const product = {
                    ...action.payload,
                    quantity: action.payload.quantity - 1,
                };

                state.cart = state.cart.filter(
                    (product) => product._id !== action.payload._id
                );

                state.cart.push(product);
            } else {
                state.cart = state.cart.filter(
                    (product) => product._id !== action.payload._id
                );
            }
        },
        clearCart: (state) => { },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;