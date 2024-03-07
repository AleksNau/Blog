import s from "./Main.module.scss";
import Page from "../../components/Page/Page.jsx";
import Popular from "../../components/Popular/Popular.jsx";
import Slider from "../../components/Slider/Slider.jsx"
import Promo from "../../components/Promo/Promo.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Direction from "../../components/Direction/Direction.jsx";

const Main = () => {

    return (
        <main className={s.page}>
            <Direction/>
            <Promo />
            <Slider />
            <Page />

        </main>
    );
};
export default Main;