import s from "./Page.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import Popular from "../Popular/Popular.jsx";
import Tags from "../Tags/Tags.jsx";

const Page = ({ children }) => (
  <section className={s.page}>
    <Container className={s.container}>
      {children}
      <div className={s.subsection}>
        <Popular />
        <Tags />
      </div>
    </Container>
  </section>
);

export default Page;
