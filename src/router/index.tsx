import {ReactNode} from "react";
import {IndexPage, CartPage, FavoritesPage, Error404Page} from '../pages/export';

interface RouterModel {
    path: string;
    component: ReactNode;
}

export const router: RouterModel[] = [
    {
        path: '*',
        component: <Error404Page/>
    },
    {
        path: '/',
        component: <IndexPage/>
    },
    {
        path: '/items',
        component: <CartPage/>
    },
    {
        path: '/favorites',
        component: <FavoritesPage/>
    }
]