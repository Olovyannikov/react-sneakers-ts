import {useTypedSelector} from "@/hooks";
import {getCart} from "@/store/models/cart/selectors";
import {ChevronIcon, FavoritesEmpty, SneakerItem, SneakersList} from "@/components";
import {SneakerModel} from "@/models";
import {Button, Container} from "@/ui";
import s from './FavoritesItems.module.scss';
import {useNavigate} from "react-router-dom";

export const FavoritesItems = (): JSX.Element => {
    const nav = useNavigate();
    const {fav} = useTypedSelector(getCart);

    return (
        <section>
            <Container className={s.container}>
                    {fav.length ?
                        <>
                            <div className={s.top}>
                                <Button icon={<ChevronIcon/>} onClick={() => nav(-1)}/>
                                <h2>Мои закладки</h2>
                            </div>
                            <SneakersList className={s.list}>
                                {fav && fav.map((el: SneakerModel) =>
                                    <SneakerItem
                                        key={el.id}
                                        item={el}
                                    />
                                )}
                            </SneakersList>
                        </>
                        :
                        <FavoritesEmpty/>
                    }
            </Container>
        </section>
    )
}