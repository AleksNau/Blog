import s from "./Promo.module.scss";
import Container from "../../veaws/Container/Container.jsx";

const Promo = () => (
  <section>
    <Container>
      <div className={s.promo}>
        <h1 className={s.title}>AlEX,HOW?</h1>
        <p className={s.text}>Блог о деньгах и возможностях</p>
      </div>
    </Container>
  </section>
);

export default Promo;
