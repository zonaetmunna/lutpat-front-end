import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBillingAddress, ICartState, IProduct } from "../../types";
import { RootState } from "../../app/store";


const initialState: ICartState = {
    cart: [],
    shippingOption: "",
    shippingCost: 0,
    discountCode: "",
    subtotal: 0,
    total: 0,
    billingAddress: {}
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const selectedProduct = state.cart.find(
                (product) => product._id === action.payload._id
            );
            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 };
                state.cart.push(product);
            } else {
                if (selectedProduct.quantity) {
                    selectedProduct.quantity += 1;
                } else {
                    selectedProduct.quantity = 1;
                }
                state.cart = state.cart.map((product) =>
                    product._id === selectedProduct._id ? selectedProduct : product
                );
            }
            state.subtotal = state.cart.reduce(
                (acc, curr) => acc + (curr.price * (curr.quantity || 0)),
                0
            );
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const existingItemIndex = state.cart.findIndex((item) => item._id === id);
            if (existingItemIndex !== -1) {
                const item = state.cart[existingItemIndex];
                if (item.quantity && item.quantity === 1) {
                    state.cart.splice(existingItemIndex, 1);
                } else if (item.quantity) {
                    item.quantity--;
                }
                state.subtotal = state.cart.reduce(
                    (acc, curr) => acc + (curr.price * (curr.quantity || 0)),
                    0
                );
            }
        },

        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const { id, quantity } = action.payload;
            const selectedProduct = state.cart.find((product) => product._id === id);
            if (selectedProduct) {
                selectedProduct.quantity = quantity;
                state.cart = state.cart.map((product) =>
                    product._id === selectedProduct._id ? selectedProduct : product
                );
                state.subtotal = state.cart.reduce(
                    (acc, curr) => acc + (curr.price * (curr.quantity || 0)),
                    0
                );
            }
        },
        clearCart: (state) => {
            state.cart = [];
            state.shippingOption = "";
            state.shippingCost = 0;
            state.discountCode = "";
            state.subtotal = 0;
            state.total = 0;
        },
        setShippingOption: (state, action: PayloadAction<string>) => {
            state.shippingOption = action.payload;
        },
        setShippingCost: (state, action: PayloadAction<number>) => {
            state.shippingCost = action.payload;
        },
        setDiscountCode: (state, action: PayloadAction<string>) => {
            state.discountCode = action.payload;
        },
        setSubtotal: (state) => {
            state.subtotal = state.cart.reduce(
                (acc, curr) => acc + (curr.price * (curr.quantity || 0)),
                0
            );
        },
        setTotal: (state) => {
            state.total = state.subtotal + state.shippingCost;
            if (state.discountCode === "EXAMPLE10") {
                state.total *= 0.9;
            }
        },
        applyDiscountCode: (state, action) => {
            const { discountCode } = action.payload;
            if (discountCode === "EXAMPLE10") {
                state.discountCode = discountCode;
                state.total *= 0.9;
            }
        },
        addToBillingAddress: (state, action: PayloadAction<IBillingAddress>) => {
            state.billingAddress = action.payload;
        },
    },
});

export const { addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setShippingOption,
    setShippingCost,
    setDiscountCode,
    setSubtotal,
    setTotal,
    applyDiscountCode, addToBillingAddress } = cartSlice.actions;

export default cartSlice.reducer;