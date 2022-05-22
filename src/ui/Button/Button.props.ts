import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type ButtonShape = 'round' | 'default';
type ButtonIconElement = SVGAElement | HTMLImageElement | HTMLPictureElement;
type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href?: string;
    shape?: ButtonShape;
    icon?: ButtonIconElement;
    iconPosition?: ButtonIconPosition;
}