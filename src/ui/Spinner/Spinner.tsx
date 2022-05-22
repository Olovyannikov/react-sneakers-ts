import cn from "classnames";

import { ReactComponent as SpinnerIcon } from './Spinner.svg';

import s from './Spinner.module.scss';
import {SpinnerProps} from "./Spinner.props";

export const Spinner = ({className, ...props}: SpinnerProps): JSX.Element => {
    return (
        <SpinnerIcon className={cn(s.spinner, className)} {...props}/>
    )
}