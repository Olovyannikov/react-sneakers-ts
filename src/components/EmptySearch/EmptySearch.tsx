import s from './EmptySearch.module.scss';

export const EmptySearch = (): JSX.Element => {
    return (
        <div className={s.empty}>
            <img src="/img/sadface.jpeg" alt='Закладок нет. Грустный смайлик'/>
            <p>
                По вашему запросу ничего не найдено.
            </p>
        </div>
    )
}