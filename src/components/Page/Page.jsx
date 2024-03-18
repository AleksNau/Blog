import s from "./Page.module.scss";
import Container from "../../veaws/Container/Container.jsx";
import Popular from "../Popular/Popular.jsx";
import Tags from "../Tags/Tags.jsx";
import Paper from "../Paper/Paper.jsx";
import Nalog from "../../Articles/Nalog/Nalog.jsx";
import Vostok from "../../Articles/Vostok/Vostok.jsx";
import Investbot from "../../Articles/Investbot/Investbot.jsx";
import { useLocation } from "react-router-dom";
import Promo from "../Promo/Promo.jsx";

const Page = () => {
  const { pathname } = useLocation();
  const pathTax = ["/nalog"].includes(pathname);
  const pathProperty = ["/property"].includes(pathname);
  const pathBot = ["/investbot"].includes(pathname);
  const pathPub = ["/pub"].includes(pathname);
  return (
    <section className={s.page}>
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
        {pathPub && <Paper category={"Земля"} />}
        {pathTax && <Nalog category={"Деньги"} />}
        {pathProperty && <Vostok category={"Земля"} />}
        {pathBot && <Investbot category={"Деньги"} />}
        <div className={s.subsection}>
          <Popular />
          <Tags />
        </div>
      </Container>
    </section>
  );
};

export default Page;
