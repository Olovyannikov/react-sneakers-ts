import cn from "classnames";

import {useContext, useRef} from "react";
import {useOnClickOutside} from "@/hooks";

import {DrawerCtx} from "@/context";
import {getCartService} from "@/services";

import {CartEmpty, CartFull} from "@/components";

import s from './Aside.module.scss';
import {AsideProps} from "./Aside.props";

export const Aside = ({children, className, isOpen, ...props}: AsideProps): JSX.Element => {
    const {data: cart} = getCartService.useFetchCartQuery(null);
    const {setOpen} = useContext(DrawerCtx);

    const ref = useRef<HTMLDivElement>(null);

    if (setOpen) useOnClickOutside(ref, () => setOpen(false));

    return (
        <aside
            ref={ref}
            className={cn(s.aside, isOpen && s.open)}
            {...props}
        >
            <h2>Корзина</h2>
            {cart && !cart.length && <CartEmpty/>}
            {cart && <CartFull items={cart}/>}
        </aside>
    )
}