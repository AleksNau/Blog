import s from "./Main.module.scss";
import Page from "../../components/Page/Page.jsx";
import Popular from "../../components/Popular/Popular.jsx";
import Slider from "../../components/Slider/Slider.jsx"
import Promo from "../../components/Promo/Promo.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Direction from "../../components/Direction/Direction.jsx";
import {Route, Routes, Navigate, useNavigate, useLocation} from "react-router-dom";
import React,{useState} from "react";
import FilteredContext from "../../contexts/filteredContext.js";
import shorts from "../../publication-list/list.js";
import Filtered from "../Filtered/Filtered.jsx";


const Main = () => {
    const {pathname} = useLocation();
    const pathMain = ['/'].includes(pathname);

    //стейт отфильтрованых тегов
    const [savedPublications, setSavedPublications] = useState([]);

    function HandleFilter (data){
        const filteredPublications = shorts.filter((item)=> {
            return item.category === data
        })
        setSavedPublications(filteredPublications)
    }
    return (
        <main className={s.page}>
            <FilteredContext.Provider value={HandleFilter}>
                {pathMain && (
                    <Direction/>
                )}
                {pathMain && (
                    <Promo />)}

                {pathMain && (
                    <Slider />)}

                <Routes>
                    <Route path={"/pub"} element={<Page />}/>
                  <Route path={"/tags"} element={<Filtered saved={savedPublications}/>}/>
                </Routes>
            </FilteredContext.Provider>
        </main>
    );
};
export default Main;