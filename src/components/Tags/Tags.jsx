import s from "./Tags.module.scss";
import Tag from "../Tag/Tag.jsx";
import Container from "../../veaws/Container/Container.jsx";

const Tags = ({action}) => (

        <section className={s.tags}>
                <Tag filter={action} category={"Деньги"}/>
                <Tag filter={action} category={"Земля"}/>
                <Tag filter={action} category={"Деньги"}/>
        </section>

)


export default Tags;