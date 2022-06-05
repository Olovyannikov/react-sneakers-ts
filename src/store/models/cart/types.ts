import {SneakerModel} from "@/models";

export interface CartState {
    cart: CartItem[];
    fav: CartItem[];
}

export interface CartItem extends SneakerModel {}