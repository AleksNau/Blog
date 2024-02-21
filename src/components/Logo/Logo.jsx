import s from "./Logo.module.scss";
import logo from "./images/logo.svg";

const Logo = () => (
  <a className={s.link} href="/">
    <img className={s.img} src={logo} alt="Логотип мебельного магазина Koff" />
  </a>
);

export default Logo;
