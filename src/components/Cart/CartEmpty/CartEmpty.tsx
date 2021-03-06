import {useContext} from "react";

import {Button} from "@/ui";
import {ArrowBack} from "@/components";

import {DrawerCtx} from "@/context";
import s from './CartEmpty.module.scss';
import {useNavigate} from "react-router-dom";

export const CartEmpty = (): JSX.Element => {
    const {setOpen} = useContext(DrawerCtx);
    const nav = useNavigate();
    const onBackButtonClickHandler = () => {
        setOpen && setOpen(false);
        nav(-1);
    };

     return (
        <div className={s.empty}>
            <picture>
                <source/>
                <img src="./img/cart-empty.jpeg" alt='Корзина пуста'/>
            </picture>
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <Button color='primary' icon={<ArrowBack/>} onClick={onBackButtonClickHandler}>Вернуться назад</Button>
        </div>
     )
}
