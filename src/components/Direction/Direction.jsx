import s from "./Direction.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import { useLocation, Link } from "react-router-dom";

const Direction = () => {
  const { pathname } = useLocation();

  return (
    <Container className={s.container}>
      <div className={s.direction}>
        <span>
          <Link to={"/"}>Главная</Link>
        </span>
        <span>&#8250;</span>
        {pathname === "/" ? <span>Новости</span> : ""}
        {pathname === "/tags" ? <span>Тэги</span> : ""}
        {pathname === "/pub" ? <span>Публикация</span> : ""}
        {pathname === "/nalog" ? <span>Налоговый вычет</span> : ""}
        {pathname === "/property" ? <span>Дальневосточный гектар</span> : ""}
        {pathname === "/investbot" ? <span>Торговый бот</span> : ""}
      </div>
    </Container>
  );
};

export default Direction;
