import s from "./List.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import Popular from "../Popular/Popular.jsx";
import Tags from "../Tags/Tags.jsx";
import Publication from "../Publication/Publication.jsx";
import shorts from "../../publication-list/list.js";

const List = () => (
  <section className={s.list}>
    <Container className={s.container}>
      <div className={s.publications}>
        {shorts.map((card) => (
          <Publication
            key={card.name}
            title={card.title}
            link={card.link}
            text={card.subtext}
            route={card.route}
          />
        ))}
      </div>
      <div className={s.subsection}>
        <Popular />
        <Tags />
      </div>
    </Container>
  </section>
);

export default List;
