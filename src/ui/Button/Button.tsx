import cn from 'classnames';
import {PropsWithChildren} from "react";

import {NavLink} from "react-router-dom";

import s from './Button.module.scss';
import {ButtonProps} from "./Button.props";

export const Button = ({
                           icon,
                           href,
                           children,
                           className,
                           color = 'none',
                           type = 'button',
                           iconPosition = 'left',
                           size = 'md',
                           ...props
                       }: PropsWithChildren<ButtonProps>): JSX.Element => {
    if (href && href.length) {
        return (
            <NavLink to={href} className={cn(className, s[color])}>
                {icon}
                {children}
            </NavLink>
        )
    }

    return (
        <button
            type={type}
            className={cn(s.btn, s[color], s[iconPosition], s[size], className)}
            {...props}
        >
            {icon}
            {children}
        </button>
    )
}