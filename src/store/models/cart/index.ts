import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, CartState} from "./types";

const initialState: CartState = {
    cart: [],
    fav: []
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state: CartState, action: PayloadAction<CartItem>) {
            state.cart.push(action.payload)
        },
        removeItemFromCart(state: CartState, action: PayloadAction<CartItem>) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        addToFav(state: CartState, action: PayloadAction<CartItem>) {
            state.fav.push(action.payload)
        },
        removeItemFromFav(state: CartState, action: PayloadAction<CartItem>) {
            state.fav = state.fav.filter(item => item.id !== action.payload.id);
        }
    }
});

export const {addToCart, removeItemFromCart, addToFav, removeItemFromFav} = cart.actions;
export default cart.reducer;