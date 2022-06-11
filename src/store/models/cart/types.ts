import {SneakerModel} from "@/models";

export interface CartState {
    store: {
        items:  CartItem[];
        isLoaded: boolean;
        isError: boolean;
    };
    cart: CartItem[];
    fav: CartItem[];
}

export interface CartItem extends SneakerModel {}