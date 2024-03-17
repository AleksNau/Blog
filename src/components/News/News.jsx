import s from "./News.module.scss";

const News = ({ link, title, text }) => (
  <div className={s.news}>
    <img className={s.image} src={link} alt="Тестовое изображение" />
    <h2 className={s.title}>{title}</h2>
    <p className={s.paragraph}>{text}</p>
  </div>
);

export default News;
