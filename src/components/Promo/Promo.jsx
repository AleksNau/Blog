import s from "./Promo.module.scss";
import Container from "../../veaws/Container/Container.jsx";

const Promo = () => (
  <section>
    <Container>
      <div className={s.promo}>
        <h1 className={s.title}>Алекс, как?</h1>
          <p>Блог о деньгах и возможностях </p>
      </div>
    </Container>
  </section>
);

export default Promo;
