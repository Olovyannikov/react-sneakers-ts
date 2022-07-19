import cn from "classnames";
import {PropsWithChildren, useEffect, useState} from "react";

import {getNormalPrice} from "@/lib";

import {getFavService, getCartService} from "@/services";

import {Button, Card} from "@/ui";
import {AddIcon, AddedIcon, FavIcon} from '@/components';

import s from './SneakerItem.module.scss';
import {SneakerItemProps} from "./SneakerItem.props";

export const SneakerItem = ({item, className, added, inFav = false, inCart = false, ...props}: PropsWithChildren<SneakerItemProps>): JSX.Element => {
    const [hasFav, setFav] = useState(false);
    const [hasCart, setCart] = useState(false);

    const {data: fav} = getFavService.useFetchAllFavQuery(null);
    const {data: cart} = getCartService.useFetchCartQuery(null);
    const [createFav, {}] = getFavService.useSetFavMutation();
    const [createCart, {}] = getCartService.useSetItemToCartMutation();
    const [removeCartItem, {}] = getCartService.useDeleteItemFromCartMutation();
    const [removeFavItem, {}] = getFavService.useDeleteItemFromFavMutation();

    const onFavoriteBtnClickHandler = () => {
        createFav(item);
        setFav(true);
    };

    const onDeleteFromFav = () => {
        fav && removeFavItem(fav.filter(el => el.uuid === item.uuid)[0]);
        setFav(false);
    };

    const onAddBtnClickHandler = () => {
        createCart(item);
        setCart(true);
    };

    const onRemoveCartItemHandler = () => {
        cart && fav && removeCartItem(cart.filter(el => (el.uuid === item.uuid))[0]);
        setCart(false);
    };

    useEffect(() => {
        cart && cart.find(el => (el.uuid === item.uuid)) ? setCart(true) : setCart(false);
        fav && fav.find(el => (el.uuid === item.uuid)) ? setFav(true) : setFav(false);
    }, [cart, fav]);

    return (
        <li className={cn(s.item, className)} {...props}>
            <Card>
                <Button
                    className={cn(s.btn, s.fav, (inFav || hasFav) && s.inFav)}
                    aria-label='Добавить в избранное'
                    icon={<FavIcon/>}
                    onClick={(inFav || hasFav) ? onDeleteFromFav : onFavoriteBtnClickHandler}
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
                        className={cn(s.btn, (inCart || hasCart) && s.added)}
                        aria-label='Добавить в корзину'
                        icon={(inCart || hasCart) ? <AddedIcon/> : <AddIcon/>}
                        onClick={(inCart || hasCart) ? onRemoveCartItemHandler : onAddBtnClickHandler}
                    />
                </div>
            </Card>
        </li>
    )
}