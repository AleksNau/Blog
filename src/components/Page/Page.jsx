import React,{useState,useEffect} from "react";
import s from "./Page.module.scss";
import Publication from "../Publication/Publication.jsx";
import Container from "../../veaws/Container/Container.jsx";
import Popular from "../Popular/Popular.jsx";
import Tags from "../Tags/Tags.jsx";
import Paper from "../Paper/Paper.jsx";
import shorts from "../../publication-list/list.js";
import Filtered from "../../veaws/Filtered/Filtered.jsx";
import FilteredContext from "../../contexts/filteredContext.js";

const Page = () => {

    //стейт отфильтрованых тегов
    const [savedPublications, setSavedPublications] = useState([]);

    function HandleFilter (data){
        const filteredPublications = shorts.filter((item)=> {
            return item.category === data
        })
        setSavedPublications(filteredPublications)
    }

    return (
        <section className={s.page}>
            <FilteredContext.Provider value={HandleFilter}>
            {/*
             <Container className={s.container}>
                <div className={s.publications}>
                    {shorts.map((card) => {
                        return (
                            <Publication
                                key={card.name}
                                title={card.title}
                                link={card.link}
                                text={card.subtext}
                            />
                        );
                    })}
                </div>
                <div className={s.subsection}>
                    <Popular/>
                    <Tags/>
                </div>
            </Container>*/}
            <Container className={s.container}>
                <Paper category={"Земля"}/>
                <div className={s.subsection}>
                    <Popular/>
                    <Tags/>
                </div>
            </Container>
            <Filtered saved={savedPublications}/>
            </FilteredContext.Provider>
        </section>
    );
};

export default Page;