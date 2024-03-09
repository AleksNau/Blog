import s from "./Strahovka.module.scss";
import Tag from "../../components/Tag/Tag.jsx";

const Strahovka = () => (
    <article className={s.paper}>
        <h1 className={s.title}>Оформление страховки для путешествий: советы и рекомендации</h1>

        <p className={s.paragraph}>Путешествие может принести множество незабываемых впечатлений, но также и неожиданные
            ситуации. Чтобы обезопасить себя и своих близких, важно заранее подумать о страховке. В этой статье мы
            расскажем о важных аспектах оформления страховки для путешествия.</p>

        <p className={s.paragraph}><b>Выбор страховой компании</b></p>

        <p className={s.paragraph}>Первым шагом является выбор страховой компании. Изучите предложения разных компаний и
            выберите ту, которая предлагает наиболее подходящие условия для вас. Обратите внимание на такие факторы, как
            покрытие страховых случаев, стоимость полиса, а также отзывы клиентов.</p>


        <img src="название_картинки.jpg" alt="Название картинки" width="300" height="200"/>

        <p className={s.paragraph}><b>Определение суммы страхового покрытия</b>
        </p> {/*Изображение “Виды налоговых вычетов” */}

        <p className={s.author}>Автор: <span className={s.second_name}>Иванов</span></p>
        <div className={s.tags}>
            <p>Теги:</p>
            <Tag/>
        </div>
        {/*Партнёрские программы Сравни и Черепаха */}
    </article>
)


export default Strahovka;