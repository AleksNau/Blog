import React from "react";
import s from "./Page.module.scss";
import Publication from "../Publication/Publication.jsx";
import Container from "../../veaws/Container/Container.jsx";
import Popular from "../Popular/Popular.jsx";
import Tags from "../Tags/Tags.jsx";
import Paper from "../Paper/Paper.jsx";

const Page = () => {
    return (
        <section className={s.page}>
            { /* <Container className={s.container}>
                <div className={s.publications}>
                    <Publication/>
                    <Publication/>
                    <Publication/>
                </div>
                <div className={s.subsection}>
                    <Popular/>
                    <Tags/>
                </div>
            </Container>*/}
            <Container className={s.container}>
                <Paper/>
                <div className={s.subsection}>
                    <Popular/>
                    <Tags/>
                </div>
            </Container>
        </section>
    );
};

export default Page;