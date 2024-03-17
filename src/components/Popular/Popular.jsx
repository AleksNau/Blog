import React from "react";
import s from "./Popular.module.scss";
import News from "../News/News.jsx";
import shorts from "../../publication-list/list.js";
import image from "../../images/test.png";

const Popular = () => (
  <section className={s.container}>
    <h2 className={s.title}>Заголовок</h2>
    <News title={shorts[0].title} link={image} text={shorts[0].subtext} />
    <News
      title={shorts[1].title}
      link={shorts[1].link}
      text={shorts[1].subtext}
    />
    <News
      title={shorts[2].title}
      link={shorts[2].link}
      text={shorts[2].subtext}
    />
  </section>
);

export default Popular;
