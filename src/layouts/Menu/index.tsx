import {useContext} from "react";
import {Link} from "react-router-dom";

import {DrawerCtx} from "@/context";

import {getNormalPrice} from "@/lib";
import {getCartService} from "@/services";

import {ReactComponent as CartIcon} from './img/cart.svg';

import {data} from "./data";
import s from './Menu.module.scss';
import {MenuProps} from "./Menu.props";

export const Menu = ({}: MenuProps): JSX.Element => {
    const {data: items} = getCartService.useFetchCartQuery(null);
    const {setOpen} = useContext(DrawerCtx);
    const onCartClickHandler = () => setOpen && setOpen(true);
    const totalPrice = () => getNormalPrice(items && items.reduce((acc, val) => acc += val.price, 0) || 0);

    return (
        <ul className={s.list}>
            <li className={s.cart}>
                <button type='button' onClick={onCartClickHandler}>
                    <CartIcon/>
                    <span>{totalPrice()} руб.</span>
                </button>
            </li>
            {data.map(el =>
                <li key={el.id}>
                    <Link to={el.link}>
                        {el.icon}
                    </Link>
                </li>
            )}
        </ul>
    )
}