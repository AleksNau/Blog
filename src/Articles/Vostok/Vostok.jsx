import s from "./Vostok.module.scss";
import Tag from "../../components/Tag/Tag.jsx";

const Vostok = ({category}) => (
    <article className={s.paper}>
        <h1 className={s.title}>
            Инструкция по программе “Дальневосточный гектар”
        </h1>
        <p className={s.paragraph}>
            В данной статье представлена инструкция по участию в программе
            “Дальневосточный гектар”: условия программы, требования к участникам и
            порядок получения гектара.
        </p>
        <ul className={s.list}>
            <li>
                <strong>Условия программы:</strong> Участники программы получают
                земельные участки площадью 1 гектар (1 Га) на период до 5 лет, в течение
                которого пользователь должен начать освоение участка, например,
                построить на нем дом. По истечении этого срока пользователь может
                оформить участок в свою собственность или же продлить договор на
                использование еще на 5 лет.
            </li>
            <li>
                <strong>Требования к участникам:</strong> Все граждане РФ и участники
                госпрограммы переселения.
            </li>
            <li>
                <strong>Порядок получения гектара:</strong> подать заявление в орган,
                занимающийся распределением участков.
            </li>
        </ul>
        <img src={`#`} alt={`Дальневосточный гектар`}/>
        <p className={s.author}>
            Автор: <span className={s.second_name}>Иванов</span>
        </p>
        <div className={s.tags}>
            <p>Теги:</p>
            <Tag category={"Земля"}/>
        </div>
    </article>
);

export default Vostok;
