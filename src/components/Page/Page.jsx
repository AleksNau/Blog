import React from "react";
import s from "./Page.module.scss";
import Publication from "../Publication/Publication.jsx";
import Container from "../../veaws/Container/Container.jsx";

const Page = () => {
    return (
        <section>
            <Container className={s.container}>
                <Publication/>
                <Publication/>
                <Publication/>
            </Container>
        </section>
    );
};

export default Page;