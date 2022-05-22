import {PropsWithChildren, useContext} from "react";
import {LayoutProps} from "./props";
import {Header} from "./Header";
import {Aside} from "./Aside/Aside";
import {DrawerContext, DrawerCtx} from '../context';

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