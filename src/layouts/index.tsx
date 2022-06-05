import {PropsWithChildren, useContext} from "react";
import {DrawerCtx} from '@/context';
import {Header} from "./Header";
import {Aside} from "./Aside/Aside";
import {LayoutProps} from "./props";

export const Layout = ({children}: PropsWithChildren<LayoutProps>): JSX.Element => {
    const {isOpen} = useContext(DrawerCtx);

    return (
        <>
            <Aside isOpen={isOpen || false}/>
            <Header/>
            <main>{children}</main>
        </>
    )
}