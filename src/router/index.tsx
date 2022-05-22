import {ReactNode} from "react";
import {IndexPage, CartPage} from '../pages/export';

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
    }
]