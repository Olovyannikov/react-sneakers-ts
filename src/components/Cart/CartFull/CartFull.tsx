import {useTypedDispatch} from "@/hooks";

import {removeItemFromCart} from "@/store/models/cart";

import {Button} from "@/ui";
import {CrossIcon} from "@/components";

import s from './CartFull.module.scss';
import {CartFullProps} from "./CartFull.props";
import {getNormalPrice} from "../../../lib/getNormalPrice";

export const CartFull = ({items}: CartFullProps): JSX.Element => {
     const dispatch = useTypedDispatch();

     return (
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
     )
}
