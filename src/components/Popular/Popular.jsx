import React from "react";
import s from "./Popular.module.scss";
import News from "../News/News.jsx";
import Container from "../../veaws/Container/Container.jsx";

const Popular = () => {
    return (

            <Container >
                <section className={s.container}>
                    <h2 className={s.title}>Заголовок</h2>
                    <News/>
                    <News/>
                    <News/>
                </section>
            </Container>

    );
};

export default Popular;