import s from "./Navigation.module.scss";

// eslint-disable-next-line react/prop-types
const Navigation = ({ active, setActive }) => (
  <nav
    className={
      active ? `${s.navigation} ${s.navigation_active} ` : ` ${s.navigation}`
    }
    onClick={() => setActive(false)}>
    <div className={s.navigation__content} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className={s.navigation__button_close}
        onClick={() => setActive(false)}
      />
      <ul className={s.navigation__list}>
        <li className={s.navigation__item}>
          <a className={s.navigation__link} href="#mainpage">
            Главная
          </a>
        </li>
        <li className={s.navigation__item}>
          <a className={s.navigation__link} href="#blogs">
            Статьи
          </a>
        </li>
        <li className={s.navigation__item}>
          <a className={s.navigation__link} href="#contacts">
            Обратная связь
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
