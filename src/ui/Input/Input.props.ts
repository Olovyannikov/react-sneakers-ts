import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: ReactNode;
    iconPos?: 'left' | 'right';
    search?: boolean;
}