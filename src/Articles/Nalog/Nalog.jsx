import s from "./Nalog.module.scss";
import Tag from "../../components/Tag/Tag.jsx";

const Nalog = ({ category }) => (
  <article className={s.paper}>
    <h1 className={s.title}>Налоговый вычет: простая инструкция</h1>
    <p className={s.paragraph}>
      Налоговый вычет - это сумма, которая уменьшает налогооблагаемый доход
      гражданина. В итоге гражданин может вернуть часть уплаченного налога на
      доходы физических лиц (НДФЛ), который составляет 13%.
    </p>
    <p className={s.paragraph}>
      В этой статье мы объясним, что такое налоговые вычеты, кто на них имеет
      право и как их можно получить.
    </p>
    {/* Изображение “Виды налоговых вычетов” */}
    <img alt={`Виды налоговых вычетов`} />
    <p className={s.paragraph}>
      Существуют различные виды налоговых вычетов, такие как:
    </p>
    <ul className={s.list}>
      <li>
        Стандартные вычеты на детей, людей с инвалидностью, военнослужащих и
        других.
      </li>
      <li>Социальные вычеты на образование, здравоохранение и другое.</li>
      <li>Имущественные вычеты на покупку или строительство дома.</li>
    </ul>
    <p className={s.paragraph}>
      Чтобы подать заявку на налоговый вычет, необходимо собрать необходимые
      документы и заполнить форму 3-НДФЛ. Затем следует подать заявление и
      документы в местную налоговую инспекцию. Процесс подачи заявки обычно
      занимает до трех месяцев.
    </p>
    <p className={s.author}>
      Автор: <span className={s.second_name}>Иванов</span>
    </p>
    <div className={s.tags}>
      <p>Теги:</p>
      <Tag category={category} />
    </div>
  </article>
);

export default Nalog;
