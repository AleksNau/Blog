import s from "./Main.module.scss";
import Page from "../../components/Page/Page.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Promo from "../../components/Promo/Promo.jsx";
import Direction from "../../components/Direction/Direction.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import FilteredContext from "../../contexts/filteredContext.js";
import shorts from "../../publication-list/list.js";
import Filtered from "../Filtered/Filtered.jsx";
import Vostok from "../../Articles/Vostok/Vostok.jsx";
import Nalog from "../../Articles/Nalog/Nalog.jsx";
import Investbot from "../../Articles/Investbot/Investbot.jsx";
import List from "../../components/List/List.jsx";

const Main = () => {
  const { pathname } = useLocation();
  const pathMain = ["/"].includes(pathname);

  // стейт отфильтрованых тегов
  const [savedPublications, setSavedPublications] = useState([]);

  function HandleFilter(data) {
    const filteredPublications = shorts.filter(
      (item) => item.category === data,
    );
    setSavedPublications(filteredPublications);
  }

  return (
    <main className={s.page}>
      <FilteredContext.Provider value={HandleFilter}>
        <Direction />
        {pathMain && <Promo />}

        {pathMain && <Slider />}
        {pathMain && <List />}

        <Routes>
          <Route path={"/property"} element={<Page children={<Vostok />} />} />
          <Route path={"/tax"} element={<Page children={<Nalog />} />} />
          <Route path={"/bot"} element={<Page children={<Investbot />} />} />
          <Route
            path={"/tags"}
            element={<Filtered saved={savedPublications} />}
          />
        </Routes>
      </FilteredContext.Provider>
    </main>
  );
};
export default Main;
