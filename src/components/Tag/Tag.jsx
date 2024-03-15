import s from "./Tag.module.scss";

const Tag = ({filter,category}) => (
    <button className={s.tag} onClick={() => filter(category)}>
Tag
    </button>
)


export default Tag;