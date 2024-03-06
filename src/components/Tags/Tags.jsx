import s from "./Tags.module.scss";
import Tag from "../Tag/Tag.jsx";
import Container from "../../veaws/Container/Container.jsx";

const Tags = () => (
    <Container className={s.container}>
        <section className={s.tags}>
                <Tag/>
                <Tag/>
                <Tag/>
        </section>
    </Container>
)


export default Tags;