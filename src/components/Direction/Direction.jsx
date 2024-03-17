import s from "./Direction.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import { useLocation } from "react-router-dom";

const Direction = () => {
  const { pathname } = useLocation();

  return (
    <Container className={s.container}>
      <div className={s.direction}>
        <span>Главная</span>
        <span>&#8250;</span>
        {pathname === "/" ? <span>Новости</span> : ""}
        {pathname === "/tags" ? <span>Тэги</span> : ""}
        {pathname === "/pub" ? <span>Публикация</span> : ""}
      </div>
    </Container>
  );
};

export default Direction;
