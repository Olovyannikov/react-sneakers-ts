import {getOrdersService} from "@/services";

import {Layout} from "@/layout";

import {Button, Container, Heading} from "@/ui";
import {CartEmpty, SneakerItem, SneakersList} from "@/components";

import s from './Cabinet.module.scss';

export const Cabinet = (): JSX.Element => {
    const {data: orders} = getOrdersService.useFetchOrdersQuery(null);
    const [removeOrder] = getOrdersService.useRemoveOrderMutation();

    return (
        <Layout>
            <section>
                <Container>
                    <Heading className={s.title}>Мои заказы</Heading>
                    {orders && !orders.length && <CartEmpty/>}
                    <SneakersList className={s.list}>
                        {orders &&
                            [...orders.map(item => item[0])].map((item, idx) => (
                                <div key={idx}>
                                    <Heading as='h3'>Заказ №{idx + 1} ({item.length})</Heading>
                                    <ul className={s.order}>
                                        {item.map(el => <SneakerItem item={el} key={el.id}/>)}
                                    </ul>
                                    <Button onClick={() => removeOrder(item[idx].id)} color='primary'>Отменить заказ</Button>
                                </div>
                            ))
                        }
                    </SneakersList>
                </Container>
            </section>
        </Layout>
    );
}
