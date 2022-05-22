import {SneakerModel} from "@/models";
import {SneakerItem, SneakersList} from "@/components";
import {useGetData} from "@/hooks";
import {API} from "@/lib";
import {Heading} from "../../ui/Heading/Heading";
import {Input} from "../../ui/Input/Input";
import s from './SneakersGrid.module.scss';

export const SneakersGrid = (): JSX.Element => {
    const data = useGetData(API.getSneakers());

    return (
        <section className={s.section}>
            <div className={s.top}>
                <Heading>Все кроссовки</Heading>
                <Input placeholder='Поиск...' search/>
            </div>
            <SneakersList>
                {data && data.map((el: SneakerModel) => <SneakerItem key={el.id} item={el}/>)}
            </SneakersList>
        </section>
    )
}