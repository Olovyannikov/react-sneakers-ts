import {ChevronIcon, FavoritesEmpty, SneakerItem, SneakersList} from "@/components";
import {SneakerModel} from "@/models";
import {Button, Container} from "@/ui";
import s from './FavoritesItems.module.scss';
import {useNavigate} from "react-router-dom";
import {getCartService, getFavService} from "@/services";

export const FavoritesItems = (): JSX.Element => {
    const nav = useNavigate();
    const {data: fav} = getFavService.useFetchAllFavQuery(null);
    const {data: cart} = getCartService.useFetchCartQuery(null);

    return (
        <section>
            <Container className={s.container}>
                    {cart && fav && fav.length ?
                        <>
                            <div className={s.top}>
                                <Button icon={<ChevronIcon/>} onClick={() => nav(-1)}/>
                                <h2>Мои закладки</h2>
                            </div>
                            <SneakersList className={s.list}>
                                {fav && fav.map((el: SneakerModel) =>
                                    <SneakerItem
                                        inCart={!!cart.find(item => item.uuid === el.uuid)}
                                        inFav={true}
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