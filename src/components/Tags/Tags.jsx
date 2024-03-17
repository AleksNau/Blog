import s from "./Tags.module.scss";
import Tag from "../Tag/Tag.jsx";

const Tags = () => (
  <section className={s.tags}>
    <Tag category={"Деньги"} />
    <Tag category={"Земля"} />
    <Tag category={"Деньги"} />
  </section>
);

export default Tags;
