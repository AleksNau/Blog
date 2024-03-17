import s from "./Direction.module.scss";
import Container from "../../veaws/Container/Container.jsx";

const Direction = () => (
  <Container className={s.container}>
    <div className={s.direction}>
      <span>Главная</span>
      <span>&#8250;</span>
      <span>Новости</span>
    </div>
  </Container>
);

export default Direction;
