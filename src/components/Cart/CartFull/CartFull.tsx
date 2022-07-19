import {useTypedDispatch, useTypedSelector} from "@/hooks";

import {getNormalPrice, getTaxesFromPrice} from "@/lib";

import {Button} from "@/ui";
import {ArrowBack, CrossIcon} from "@/components";

import s from './CartFull.module.scss';
import {CartFullProps} from "./CartFull.props";
import {SneakerModel} from "@/models";
import {getCartService} from "@/services";

export const CartFull = ({items}: CartFullProps): JSX.Element => {
    const {data: cart} = getCartService.useFetchCartQuery(null);
    const [removeCartItem, {}] =  getCartService.useDeleteItemFromCartMutation();
    const price = cart && cart.reduce((acc, val) => acc += val.price, 0)

    const onRemoveItemFromCartHandler = (item: SneakerModel) => removeCartItem(item);

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
                        <Button onClick={() => onRemoveItemFromCartHandler(item)} icon={<CrossIcon/>}/>
                    </li>
                ))}
            </ul>
             <footer className={s.footer}>
                  <p>Итого: <b>{getNormalPrice(price ?? 0)} руб.</b></p>
                  <p>Налог 5%: <b>{getTaxesFromPrice(price ?? 0, 5)} руб.</b></p>
                  <Button
                      className={s.orderBtn}
                      type='submit'
                      color='primary'
                      icon={<ArrowBack/>}
                      iconPosition='right'
                  >
                      Оформить заказ
                  </Button>
             </footer>
        </form>
    )
}
