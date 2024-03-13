import React from "react";
import s from "./Slider.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import Likes from "../Likes/Likes.jsx";
import shorts from "../../publication-list/list.js";

const Slider = () => {
    return (
        <section >
            <Container className={s.container}>
                <div className={`${s.short} ${s.lead}`}>
                    <h2 className={s.title}>{shorts[0].title}</h2>
                    <Likes name={s.about} text={s.text}/>
                </div>

                <div className={`${s.short} ${s.second}`}>
                    <h2 className={s.title}>{shorts[1].title}</h2>
                    <Likes name={s.about} text={s.text}/>
                </div>

                <div className={`${s.short} ${s.third}`}>
                    <h2 className={s.title}>{shorts[2].title}</h2>
                    <Likes name={s.about} text={s.text}/>
                </div>
            </Container>
        </section>
    );
};

export default Slider;