import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, CartState} from "./types";
import {API} from "@/lib";

const initialState: CartState = {
    store: {
        items: [],
        isError: false,
        isLoaded: false
    },
    cart: [],
    fav: []
}

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch(API.getSneakers());

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

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
    },
    extraReducers: {
        [fetchCart.fulfilled.type]: (state, action: PayloadAction<CartItem[]>) => {
            state.store.items = action.payload;
            state.store.isLoaded = true;
            state.store.isError = false;
        },
        [fetchCart.pending.type]: (state) => {
            state.store.isLoaded = false;
            state.store.isError = false;
        },
        [fetchCart.rejected.type]: (state) => {
            state.store.isLoaded = true;
            state.store.isError = true;
        }
    }
});

export const {addToCart, removeItemFromCart, addToFav, removeItemFromFav} = cart.actions;
export default cart.reducer;