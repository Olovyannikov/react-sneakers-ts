import {Layout} from "@/layout";
import {Container, Heading} from "@/ui";

import s from './NotFound.module.scss';
import {Link} from "react-router-dom";

export const NotFound = (): JSX.Element => {
    return (
        <Layout>
            <section>
                <Container className={s.page}>
                    <Heading>Page Not Found ;(</Heading>
                    <Link to='/'>Back to Main Page</Link>
                </Container>
            </section>
        </Layout>
    );
}
