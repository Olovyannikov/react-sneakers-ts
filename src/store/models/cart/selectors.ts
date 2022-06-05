import {RootState} from "../../index";

export const getCart = (state: RootState) => state.cart;
export const getTotalPrice = (state: RootState) => state.cart.cart.reduce((acc, val) => acc += val.price, 0);