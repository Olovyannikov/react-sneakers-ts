import cn from "classnames";
import {PropsWithChildren} from "react";

import {useTypedDispatch, useTypedSelector} from "@/hooks";

import {addToCart, addToFav, removeItemFromCart, removeItemFromFav} from "@/store/models/cart";
import {getCart} from "@/store/models/cart/selectors";

import {Button, Card} from "@/ui";
import {AddIcon, AddedIcon, FavIcon} from '@/components';

import s from './SneakerItem.module.scss';
import {SneakerItemProps} from "./SneakerItem.props";
import {getNormalPrice} from "../../lib/getNormalPrice";

export const SneakerItem = ({item, className, ...props}: PropsWithChildren<SneakerItemProps>): JSX.Element => {
    const dispatch = useTypedDispatch();
    const {cart, fav} = useTypedSelector(getCart);

    const onAddBtnClickHandler = () =>
        cart.includes(item) ? dispatch(removeItemFromCart(item)) : dispatch(addToCart(item));
    const onFavoriteBtnClickHandler = () =>
        fav.includes(item) ? dispatch(removeItemFromFav(item)) : dispatch(addToFav(item));

    return (
        <li className={cn(s.item, className)} {...props}>
            <Card>
                <Button
                    className={cn(s.btn, s.fav, fav.includes(item) && s.inFav)}
                    aria-label='Добавить в избранное'
                    icon={<FavIcon/>}
                    onClick={onFavoriteBtnClickHandler}
                />
                <picture>
                    <img src={item.image} width={133} height={112} alt={item.name}/>
                </picture>
                <h3>{item.name}</h3>
                <div className={s.bottom}>
                    <div className={s.price}>
                        <span>Цена:</span>
                        <b>{getNormalPrice(item.price)} руб.</b>
                    </div>
                    <Button
                        className={cn(s.btn, cart.includes(item) && s.added)}
                        aria-label='Добавить в корзину'
                        icon={cart.includes(item) ? <AddedIcon/> : <AddIcon/>}
                        onClick={onAddBtnClickHandler}
                    />
                </div>
            </Card>
        </li>
    )
}