import React,{useState,useEffect} from "react";
import s from "./Page.module.scss";
import Publication from "../Publication/Publication.jsx";
import Container from "../../veaws/Container/Container.jsx";
import Popular from "../Popular/Popular.jsx";
import Tags from "../Tags/Tags.jsx";
import Paper from "../Paper/Paper.jsx";
import shorts from "../../publication-list/list.js";
import Filtered from "../../veaws/Filtered/Filtered.jsx";

const Page = () => {

//стейт сохраненных карточек
    const [savedMovies, setSavedMovies] = useState([]);

    function HandleFilter (data){
        const filteredMovie = shorts.filter((movie)=> {
            return movie.category === data
        })
        setSavedMovies(filteredMovie)
        console.log(filteredMovie)
    }
    useEffect(() => {

    }, []);
    return (
        <section className={s.page}>{/*
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
                <Paper/>
                <div className={s.subsection}>
                    <Popular/>
                    <Tags action={HandleFilter}/>
                </div>
            </Container>
            <Filtered saved={savedMovies}/>
        </section>
    );
};

export default Page;