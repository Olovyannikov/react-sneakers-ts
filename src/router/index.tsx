import {ReactNode} from "react";
import {IndexPage, CartPage, FavoritesPage} from '../pages/export';

interface RouterModel {
    path: string;
    component: ReactNode;
}

export const router: RouterModel[] = [
    {
        path: '/',
        component: <IndexPage/>
    },
    {
        path: '/cart',
        component: <CartPage/>
    },
    {
        path: '/favorites',
        component: <FavoritesPage/>
    }
]