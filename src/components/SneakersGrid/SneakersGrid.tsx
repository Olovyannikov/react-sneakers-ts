import {Heading, Input, ErrorMessage} from "@/ui";
import {EmptySearch, SneakerItem, SneakersList, SneakersSkeleton} from "@/components";

import {useDebounce, useInput} from "@/hooks";

import {SneakerModel} from "@/models";

import s from './SneakersGrid.module.scss';
import {SneakersGridProps} from "./SneakerGrid.props";
import {getSneakersService} from "@/services";

export const SneakersGrid = ({title = 'Все кроссовки'}: SneakersGridProps): JSX.Element => {
    const input = useInput('');
    const value = useDebounce(input.value);
    const {data: store, error, isLoading} = getSneakersService.useFetchAllSneakersQuery(null);
    const {data: search} = getSneakersService.useSearchSneakersQuery(value);
    const empty = value.length > 0 && search && search.length === 0;

    return (
        <section className={s.section}>
            <div className={s.top}>
                <Heading>{title}</Heading>
                <Input placeholder='Поиск...' search {...input}/>
            </div>
            <SneakersList>
                {!search && store && store.map((el: SneakerModel) =>
                    <SneakerItem
                        key={el.id}
                        item={el}
                    />
                )}
                {search && search.map((el: SneakerModel) => <SneakerItem key={el.id} item={el}/>)}
                {isLoading && Array(10).fill('').map((_, index) =>
                    <li key={index}><SneakersSkeleton/></li>)}
            </SneakersList>
            {error && <ErrorMessage message="Произошла ошибка загрузки. Попробуйте позже."/>}
            {empty && <EmptySearch/>}
        </section>
    )
}