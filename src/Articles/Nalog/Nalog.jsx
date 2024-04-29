import s from "./Nalog.module.scss";
import Tag from "../../components/Tag/Tag.jsx";
import screen1 from "./images/1.jpg";
import screen2 from "./images/2.jpg";
import screen3 from "./images/3.jpg";
import screen4 from "./images/4.jpg";
import screen5 from "./images/5.jpg";
import screen6 from "./images/6.jpg";
import screen7 from "./images/7.jpg";
import screen8 from "./images/8.jpg";

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

    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.paragraph}>
          Необходимо заполнить информацию о себе а так же отметить впервые вы
          подаете за этот год декларацию или нет.
        </p>
        <img className={s.image} alt={`1 скриншот`} src={screen1} />
      </li>
      <li className={s.item}>
        <p className={s.paragraph}>
          Далее система сама подгружает ваши доходы если вы работали как физ
          лицо и делали отчисление. Если же ничего нет то необходимо внести
          данне о доходах.
        </p>
        <img className={s.image} alt={`2 скриншот`} src={screen2} />
      </li>
      <li className={s.item}>
        <p className={s.paragraph}>
          Далее необходимо выбрать вид налогового вычета, у меня "Социальные
          налоговые вычеты".
        </p>
        <img className={s.image} alt={`3 скриншот`} src={screen3} />
      </li>
      <li className={s.item}>
        <p className={s.paragraph}>Уточнить категорию.</p>
        <img className={s.image} alt={`4 скриншот`} src={screen4} />
      </li>
      <li className={s.item}>
        <p className={s.paragraph}>
          Указать сумму расходов по выбранной категории.
        </p>
        <img className={s.image} alt={`5 скриншот`} src={screen5} />
      </li>
      <li className={s.item}>
        <p className={s.paragraph}>
          Далее выбрать счет на который поступит вычет после проверки. Система
          автоматически находит все ваши счета. Будьте внимательны и проверте
          всё. Снизу подсвечена сумма которая вернется в случае успешной
          проверки декларации.
        </p>
        <img className={s.image} alt={`6 скриншот`} src={screen6} />
      </li>
      <li className={s.item}>
        <p className={s.paragraph}>
          Необходимо приложить платежные документы, справки и договора оказания
          услуг.
        </p>
        <img className={s.image} alt={`7 скриншот`} src={screen7} />
      </li>
      <li className={s.item}>
        <p className={s.paragraph}>
          Отправляем и ждём результатов камеральной проверки.
        </p>
        <img className={s.image} alt={`8 скриншот`} src={screen8} />
      </li>
    </ul>

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
