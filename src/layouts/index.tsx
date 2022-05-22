import {PropsWithChildren} from "react";
import {LayoutProps} from "./props";
import {Header} from "./Header";

export const Layout = ({children}: PropsWithChildren<LayoutProps>): JSX.Element => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}