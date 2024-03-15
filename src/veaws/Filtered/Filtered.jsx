import s from "./Filtered.module.scss";
import Container from "../Container/Container.jsx";
import Publication from "../../components/Publication/Publication.jsx";

const Filtered = ({children,saved}) => (
    <Container className={s.container}>
    <div className={s.filtered}>
        {saved.map((card) => {
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
    </Container>
)


export default Filtered;