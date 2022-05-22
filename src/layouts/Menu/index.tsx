import {Link} from "react-router-dom";
import {data} from "./data";

import s from './Menu.module.scss';
import {MenuProps} from "./Menu.props";

import {ReactComponent as CartIcon} from './img/cart.svg';

export const Menu = ({}: MenuProps): JSX.Element => {
    return (
        <ul className={s.list}>
            <li className={s.cart}>
                <CartIcon/>
                <span>1295 руб.</span>
            </li>
            {data.map(el =>
                <li key={el.id}>
                    <Link
                        to={'/'}
                    >
                        {el.icon}
                    </Link>
                </li>
            )}
        </ul>
    )
}