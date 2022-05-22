import {createContext, PropsWithChildren, useEffect, useState} from "react";

interface DrawerContextModel {
    isOpen?: boolean;
    setOpen?: (state: boolean) => void;
}

export const DrawerCtx = createContext<DrawerContextModel>({});

export const DrawerContext = ({children}: PropsWithChildren<DrawerContextModel>): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    const onOpenBtnClickHandler = (state: boolean) => setOpen(state);

    return <DrawerCtx.Provider value={{isOpen: open, setOpen: (state: boolean) => onOpenBtnClickHandler(state)}}>{children}</DrawerCtx.Provider>

}