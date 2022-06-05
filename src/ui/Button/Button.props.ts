import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

type ButtonShape = 'round' | 'default';
type ButtonIconElement = ReactNode;
type ButtonIconPosition = 'left' | 'right' | 'center';
type ButtonColor = 'primary' | 'none';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href?: string;
    shape?: ButtonShape;
    icon?: ButtonIconElement;
    iconPosition?: ButtonIconPosition;
    color?: ButtonColor;
}