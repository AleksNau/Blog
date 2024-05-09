import s from "./Page.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import Tags from "../Tags/Tags.jsx";

const Page = ({children}) => (
    <section className={s.page}>
        <Container className={s.container}>
            {children}
            <div className={s.subsection}>
                <Tags/>
            </div>
        </Container>
    </section>
);

export default Page;
