import cn from 'classnames';
import {PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

import s from './Button.module.scss';
import {ButtonProps} from "./Button.props";

export const Button = ({href, type = 'button', children, className, icon, ...props}: PropsWithChildren<ButtonProps>): JSX.Element => {
    if (href && href.length) {
        return (
            <NavLink to={href} className={cn(className)}>
                {children}
            </NavLink>
        )
    }

    return (
        <button
            className={
                cn(s.btn, className)
            }
            type={type}
            {...props}
        >
            {icon || children}
        </button>
    )
}