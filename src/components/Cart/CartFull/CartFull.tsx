import {useTypedDispatch, useTypedSelector} from "@/hooks";

import {removeItemFromCart} from "@/store/models/cart";
import {getTotalPrice} from "@/store/models/cart/selectors";

import {getNormalPrice, getTaxesFromPrice} from "@/lib";

import {Button} from "@/ui";
import {ArrowBack, CrossIcon} from "@/components";

import s from './CartFull.module.scss';
import {CartFullProps} from "./CartFull.props";

export const CartFull = ({items}: CartFullProps): JSX.Element => {
    const dispatch = useTypedDispatch();
    const price = useTypedSelector(getTotalPrice);

    return (
        <form className={s.cart}>
            <ul className={s.list}>
                {items.map(item => (
                    <li key={item.id} className={s.item}>
                        <picture>
                            <source src={item.imageWebp}/>
                            <img src={item.image} alt={item.name}/>
                        </picture>
                        <p>{item.name}</p>
                        <b>{getNormalPrice(item.price)} руб.</b>
                        <Button onClick={() => dispatch(removeItemFromCart(item))} icon={<CrossIcon/>}/>
                    </li>
                ))}
            </ul>
             <div className={s.footer}>
                  <p>Итого: <b>{getNormalPrice(price)} руб.</b></p>
                  <p>Налог 5%: <b>{getTaxesFromPrice(price, 5)} руб.</b></p>
                  <Button
                      className={s.orderBtn}
                      type='submit'
                      color='primary'
                      icon={<ArrowBack/>}
                      iconPosition='right'
                  >
                      Оформить заказ
                  </Button>
             </div>
        </form>
    )
}
