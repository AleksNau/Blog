import React from "react";
import s from "./Publication.module.scss";
import image from "../../images/test.png"
import Likes from "../Likes/Likes.jsx";


const Publication = ({title,link,text}) => {
    return (
        <article className={s.publication}>
                <img src={link} className={s.image}/>
            <div className={s.container}>
                <h2 className={s.title}>{title}</h2>
                <p className={s.paragraph}>{text}</p>
                <Likes name={s.about}/>
            </div>
        </article>
    );
};

export default Publication;