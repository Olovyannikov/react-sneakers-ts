import cn from "classnames";

import {ReactComponent as SearchIcon} from "./img/search.svg";

import s from './Input.module.scss';
import {InputProps} from "./Input.props";

export const Input = ({icon, className, iconPos, search = false, type = 'text', ...props}: InputProps): JSX.Element => {
    return (
        <label className={cn(s.label, icon && s.icon, iconPos && s.iconPos, s.search, className)}>
            {search && <SearchIcon/>}
            {icon}
            <input
                className={s.input}
                type={search ? 'search' : type}
                {...props}
            />
        </label>
    )
}