import cn from "classnames";
import {PropsWithChildren} from "react";

import s from './Card.module.scss';
import {CardProps} from "./Card.props";

export const Card = ({children, className, ...props}: PropsWithChildren<CardProps>): JSX.Element => {
    return (
        <article className={cn(s.card, className)} {...props}>
            {children}
        </article>
    )
}