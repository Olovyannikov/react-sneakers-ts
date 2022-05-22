import {Link} from "react-router-dom";
import {data} from "./data";

import s from './Menu.module.scss';
import {MenuProps} from "./Menu.props";

import {ReactComponent as CartIcon} from './img/cart.svg';
import {useContext} from "react";
import {DrawerCtx} from "../../context";

export const Menu = ({}: MenuProps): JSX.Element => {
    const {setOpen} = useContext(DrawerCtx);

    return (
        <ul className={s.list}>
            <li className={s.cart}>
                <button type='button' onClick={() => setOpen && setOpen(true)}>
                    <CartIcon/>
                    <span>1295 руб.</span>
                </button>
            </li>
            {data.map(el =>
                <li key={el.id}>
                    <Link
                        to='/'
                    >
                        {el.icon}
                    </Link>
                </li>
            )}
        </ul>
    )
}