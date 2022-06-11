import cn from "classnames";

import {useContext, useRef} from "react";
import {useOnClickOutside, useTypedSelector} from "@/hooks";

import {DrawerCtx} from "@/context";

import {getCart} from "@/store/models/cart/selectors";

import {CartEmpty, CartFull} from "@/components";

import s from './Aside.module.scss';
import {AsideProps} from "./Aside.props";

export const Aside = ({children, className, isOpen, ...props}: AsideProps): JSX.Element => {
    const {setOpen} = useContext(DrawerCtx);
    const {cart} = useTypedSelector(getCart);

    const ref = useRef<HTMLDivElement>(null);

    if (setOpen) useOnClickOutside(ref, () => setOpen(false));

    return (
        <aside
            ref={ref}
            className={cn(s.aside, isOpen && s.open)}
            {...props}
        >
            <h2>Корзина</h2>
            {!cart.length && <CartEmpty/>}
            {cart.length && <CartFull items={cart}/>}
        </aside>
    )
}