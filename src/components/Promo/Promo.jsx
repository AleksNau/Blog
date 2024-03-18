import s from "./Promo.module.scss";
import Container from "../../veaws/Container/Container.jsx";

const Promo = () => (
  <section>
    <Container>
      <div className={s.promo}>
        <h1 className={s.title}>Alex, how?</h1>
      </div>
    </Container>
  </section>
);

export default Promo;
