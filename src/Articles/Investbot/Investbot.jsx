import s from "./Investbot.module.scss";
import Tag from "../../components/Tag/Tag.jsx";

const Investbot = () => (
  <article className={s.paper}>
    <h1 className={s.title}>
      Торговый бот на JavaScript с использованием Тинькофф API
    </h1>
    <p className={s.paragraph}>
      Создание автоматического торгового бота может быть сложной задачей, но с
      помощью Тинькофф API и JavaScript, это становится возможным. В этой статье
      мы рассмотрим шаги по созданию торгового бота, который будет автоматически
      покупать и продавать активы в зависимости от заданных параметров.
    </p>
    <img src={"#"} alt={`Изображение 1`} />
    <p className={s.paragraph}>
      Первым шагом является регистрация в Тинькофф API. Вам потребуется создать
      новый аккаунт и получить необходимые ключи для доступа к API. После
      регистрации вы получите информацию о ключах и секретах, которые необходимо
      использовать в коде бота.
    </p>
    <img src={"#"} alt={`Изображение 1`} />
    <p className={s.paragraph}>
      Следующим шагом будет создание торгового бота. Вам понадобится библиотека
      для работы с API, например Tinkoff.Investments.API. После этого вы сможете
      начать работу с API и отправлять запросы на покупку и продажу активов.
    </p>
    <img src={"#"} alt={`Изображение 1`} />
    <p className={s.paragraph}>
      В этой статье мы рассмотрели только основы создания торгового бота на
      JavaScript с использованием Тинькофф API. Для более подробной информации и
      примеров кода, рекомендуется обратиться к документации Тинькофф API и
      других источников.
    </p>

    <p className={s.author}>
      Автор: <span className={s.second_name}>Иванов</span>
    </p>
    <div className={s.tags}>
      <p>Теги:</p>
      <Tag category={"Деньги"} />
    </div>
    {/*
        Реферальная программа сервиса “Тинькофф” */}
  </article>
);

export default Investbot;
