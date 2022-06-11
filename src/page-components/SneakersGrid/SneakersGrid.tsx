import {useEffect} from "react";
import {SneakerModel} from "@/models";
import {SneakerItem, SneakersList, SneakersSkeleton} from "@/components";
import {useTypedDispatch, useTypedSelector} from "@/hooks";
import {Heading} from "../../ui/Heading/Heading";
import {Input} from "../../ui/Input/Input";
import {getCart} from "@/store/models/cart/selectors";
import {fetchCart} from "@/store/models/cart";
import s from './SneakersGrid.module.scss';

interface SneakersGridProps {
    title?: string;
}

export const SneakersGrid = ({title = 'Все кроссовки'}: SneakersGridProps): JSX.Element => {
    const dispatch = useTypedDispatch();
    const {store} = useTypedSelector(getCart);

    useEffect(() => {
        !store.items.length && dispatch(fetchCart());
    }, [dispatch]);

    return (
        <section className={s.section}>
            <div className={s.top}>
                <Heading>{title}</Heading>
                <Input placeholder='Поиск...' search/>
            </div>
            <SneakersList>
                {store.items && store.items.map((el: SneakerModel) =>
                    <SneakerItem
                        key={el.id}
                        item={el}
                    />)}
                {!store.isLoaded && Array(10).fill('').map((_, index) =>
                    <li key={ index }><SneakersSkeleton /></li>) }
            </SneakersList>
        </section>
    )
}