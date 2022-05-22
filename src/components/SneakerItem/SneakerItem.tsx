import cn from "classnames";
import {PropsWithChildren} from "react";

import {Card} from "@/ui";

import s from './SneakerItem.module.scss';
import {SneakerItemProps} from "./SneakerItem.props";

export const SneakerItem = ({item, className, ...props}: PropsWithChildren<SneakerItemProps>): JSX.Element => {
    return (
        <li className={cn(s.item, className)} {...props}>
            <Card>
                <picture>
                    <img src={item.image} width={133} height={112} alt={item.name}/>
                </picture>
                <h3>{item.name}</h3>
                <span>Цена:</span>
                <b>{item.price}</b>
                <button aria-label='Добавить в корзину'/>
            </Card>
        </li>
    )
}