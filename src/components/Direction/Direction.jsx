import s from "./Direction.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import {useLocation} from "react-router-dom";

const Direction = () => {
    const {pathname} = useLocation();

    return (
        <Container className={s.container}>
            <div className={s.direction}>
                <span>Главная</span>
                <span>&#8250;</span>
                {pathname === "/" ? <span>Новости</span> : ""}
                {pathname === "/tags" ? <span>Тэги</span> : ""}
                {pathname === "/property" ? <span>Дальневосточный гектар</span> : ""}
                {pathname === "/tax" ? <span>Налоговый вычет</span> : ""}
                {pathname === "/bot" ? <span>Торговый бот</span> : ""}
                {pathname === "/cifprof" ? <span>Цифровые профессии</span> : ""}
                {pathname === "/insurance" ? <span>Страховка</span> : ""}
            </div>
        </Container>
    );
};

export default Direction;
