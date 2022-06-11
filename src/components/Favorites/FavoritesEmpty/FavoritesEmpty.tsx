import {Button} from "@/ui";
import {ArrowBack} from "@/components";

import s from './FavoritesEmpty.module.scss';
import {useNavigate} from "react-router-dom";

export const FavoritesEmpty = (): JSX.Element => {
    const navigation = useNavigate();
    const onBackBtnClickHandler = () => navigation(-1);

    return (
        <div className={s.empty}>
            <img src="/img/sadface.jpeg" alt='Закладок нет. Грустный смайлик'/>
            <h2>Закладок нет</h2>
            <p>Вы ничего не добавляли в закладки</p>
            <Button onClick={onBackBtnClickHandler} color="primary" icon={<ArrowBack/>}>Вернуться назад</Button>
        </div>
    )
}