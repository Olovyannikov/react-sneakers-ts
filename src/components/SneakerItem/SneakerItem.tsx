import cn from "classnames";
import {PropsWithChildren, useState} from "react";

import {Button, Card} from "@/ui";
import {ReactComponent as AddIcon} from './img/add.svg';
import {ReactComponent as AddedIcon} from './img/added.svg';
import {ReactComponent as FavIcon} from './img/fav.svg';

import s from './SneakerItem.module.scss';
import {SneakerItemProps} from "./SneakerItem.props";

export const SneakerItem = ({item, className, ...props}: PropsWithChildren<SneakerItemProps>): JSX.Element => {
    const [added, setAdded] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<boolean>(false);

    const onAddBtnClickHandler = () => setAdded(!added);
    const onFavoriteBtnClickHandler = () => setFavorite(!favorite);

    return (
        <li className={cn(s.item, className)} {...props}>
            <Card>
                <Button
                    className={cn(s.btn, s.fav, favorite && s.inFav)}
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
                        <b>{item.price} руб.</b>
                    </div>
                    <Button
                        className={cn(s.btn, added && s.added)}
                        aria-label='Добавить в корзину'
                        icon={added ? <AddedIcon/> : <AddIcon/>}
                        onClick={onAddBtnClickHandler}
                    />
                </div>
            </Card>
        </li>
    )
}