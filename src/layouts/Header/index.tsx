import cn from "classnames";
import {Link} from "react-router-dom";

import {Container} from "@/ui";
import {Menu} from "../Menu";

import {logo, logo2x} from './img';

import s from './Header.module.scss';
import {HeaderProps} from "./Header.props";

export const Header = ({className}: HeaderProps): JSX.Element => {
    return (
        <header className={cn(s.header, className)}>
            <Container className={s.container}>
                <Link to='/'>
                    <picture>
                        <source srcSet={logo2x} src={logo} type='image/png'/>
                        <img src={logo} alt='Логотип React Sneakers' width={245} height={41}/>
                    </picture>
                </Link>
                <Menu/>
            </Container>
        </header>
    )
}