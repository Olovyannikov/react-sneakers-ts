import cn from "classnames";

import s from './SneakerList.module.scss';
import {SneakersListProps} from "./SneakersList.props";

export const SneakersList = ({children, className, ...props}: SneakersListProps): JSX.Element => {
    return (
        <ul className={cn(s.list, className)} {...props}>
            {children}
        </ul>
    )
}