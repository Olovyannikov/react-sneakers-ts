import cn from "classnames";

import s from './Heading.module.scss';
import {HeadingProps} from "./Heading.props";

export const Heading = ({children, as = 'h2', className, ...props}: HeadingProps): JSX.Element => {
    const Tag = as;

    return (
        <Tag className={cn(s.title)} {...props}>{children}</Tag>
    )
}