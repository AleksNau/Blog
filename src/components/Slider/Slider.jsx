import s from "./Slider.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import Likes from "../Likes/Likes.jsx";
import shorts from "../../publication-list/list.js";
import nalog from "../../images/nalog.jpg";
import { Link } from "react-router-dom";

const Slider = () => (
  <section>
    <Container className={s.container}>
      <Link
        to="/nalog"
        className={`${s.short} ${s.lead}`}
        style={{ backgroundImage: `url(${nalog})` }}>
        <h2 className={s.title}>{shorts[0].title}</h2>
        <Likes name={s.about} text={s.text} />
      </Link>

      <Link
        to="/property"
        className={`${s.short} ${s.second}`}
        style={{
          backgroundImage: `url("https://s0.rbk.ru/v6_top_pics/media/img/1/15/756243589156151.jpg")`,
        }}>
        <h2 className={s.title}>{shorts[1].title}</h2>
        <Likes name={s.about} text={s.text} />
      </Link>

      <Link
        to="/investbot"
        className={`${s.short} ${s.third}`}
        style={{
          backgroundImage: `url("https://t3.ftcdn.net/jpg/05/85/33/24/360_F_585332472_NXIwwkCBvdqr7HDnLxFFQpuxWr6BxuEE.jpg")`,
        }}>
        <h2 className={s.title}>{shorts[2].title}</h2>
        <Likes name={s.about} text={s.text} />
      </Link>
    </Container>
  </section>
);

export default Slider;
