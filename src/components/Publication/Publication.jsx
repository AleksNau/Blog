import React from "react";
import s from "./Publication.module.scss";
import image from "../../images/test.png"
import Likes from "../Likes/Likes.jsx";


const Publication = () => {
    return (
        <article className={s.publication}>
                <img src={image} className={s.image}/>
            <div className={s.container}>
                <h2 className={s.title}>Заголовок</h2>
                <p className={s.paragraph}>Our machine learning models train on billions of data points and help forecast market growth, demand, and prices.</p>
                <Likes name={s.about}/>
            </div>
        </article>
    );
};

export default Publication;