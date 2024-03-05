import s from "./Main.module.scss";
import Page from "../../components/Page/Page.jsx";
import Popular from "../../components/Popular/Popular.jsx";
import Slider from "../../components/Slider/Slider.jsx"
import Promo from "../../components/Promo/Promo.jsx";

const Main = () => {

    return (
        <main className={s.page}>
            <Promo />
            <Slider />
            <Page />
            <Popular />
        </main>
    );
};
export default Main;