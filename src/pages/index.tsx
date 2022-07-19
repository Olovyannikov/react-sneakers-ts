import {Layout} from "@/layout";
import {Container} from "@/ui";
import {SneakersGrid} from "@/components";

const IndexPage = (): JSX.Element => {
    return (
        <Layout>
            <Container>
                <SneakersGrid/>
            </Container>
        </Layout>
    )
}

export default IndexPage;