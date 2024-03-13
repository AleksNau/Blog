import React from "react";
import s from "./Popular.module.scss";
import News from "../News/News.jsx";

const Popular = () => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>Заголовок</h2>
            <News/>
            <News/>
            <News/>
        </section>
    );
};

export default Popular;