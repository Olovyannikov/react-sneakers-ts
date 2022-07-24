import {getOrdersService} from "@/services";

import {Layout} from "@/layout";

import {Button, Container, Heading, Spinner} from "@/ui";
import {InfoMessage, SneakerItem, SneakersList} from "@/components";

import s from './Cabinet.module.scss';

export const Cabinet = (): JSX.Element => {
    const {data: orders, isLoading, isError} = getOrdersService.useFetchOrdersQuery(null);
    const [removeOrder, removeOrderRest] = getOrdersService.useRemoveOrderMutation();

    return (
        <Layout>
            <section>
                <Container>
                    <Heading className={s.title}>Мои заказы</Heading>
                    {isLoading && <Spinner/>}
                    {isError && <Heading>Что-то пошло не так. Попробуйте перезагрузить страницу.</Heading>}
                    {orders && !orders.length &&
                        <InfoMessage
                            message='Вы нищеброд? Оформите хотя бы один заказ.'
                            title='У вас нет заказов'
                            image='/img/sadsmile.jpeg'
                        />}
                    <SneakersList className={s.list}>
                        {orders &&
                            [...orders.map(item => item[0])].map((item, idx) => (
                                <li key={idx}>
                                    <Heading as='h3'>Заказ №{Number(orders[idx].id)} ({item.length})</Heading>
                                    <ul className={s.order}>
                                        {item.map(el => <SneakerItem item={el} key={el.id}/>)}
                                    </ul>
                                    <Button onClick={() => removeOrder(Number(orders[idx].id))} size='sm' color='primary'>
                                        Отменить заказ
                                    </Button>
                                </li>
                            ))
                        }
                        {removeOrderRest.isError &&
                            <Heading>Что-то пошло не так. Попробуйте перезагрузить страницу.</Heading>}
                    </SneakersList>
                </Container>
            </section>
        </Layout>
    );
}