import cart from './cart';

export interface RootModel {
    cart: typeof cart;
}

export const models: RootModel = {cart};