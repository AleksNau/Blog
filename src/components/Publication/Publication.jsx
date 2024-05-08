import s from "./Publication.module.scss";
import Likes from "../Likes/Likes.jsx";
import {useNavigate} from "react-router-dom";

const Publication = ({ title, link, text,route }) => {
const navigate = useNavigate();
return (
    <article className={s.publication} onClick={() => navigate(route)}>
    <img src={link} className={s.image} />
    <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.paragraph}>{text}</p>
        {/*<Likes name={s.about}/>*/}
    </div>
</article>)

};

export default Publication;
