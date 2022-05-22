import cn from "classnames";

import s from './Aside.module.scss';
import {AsideProps} from "./Aside.props";
import {useContext, useRef} from "react";
import {useOnClickOutside} from "@/hooks";
import {DrawerCtx} from "../../context";

export const Aside = ({children, className, isOpen, ...props}: AsideProps): JSX.Element => {
    const {setOpen} = useContext(DrawerCtx);

    const ref = useRef<HTMLDivElement>(null);

    if (setOpen) {
        useOnClickOutside(ref, () => setOpen(false));
    }

    return (
        <aside
            ref={ref}
            className={cn(s.aside, isOpen && s.open)}
            {...props}
        >
            {children}
        </aside>
    )
}