import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AsideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
}