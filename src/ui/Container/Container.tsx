import cn from "classnames";
import {PropsWithChildren} from "react";

import s from './Container.module.scss';
import {ContainerProps} from "./Container.props";

export const Container = ({children, className, ...props}: PropsWithChildren<ContainerProps>): JSX.Element => {
    return (
        <div className={cn(s.container, className)} {...props}>{children}</div>
    )
}