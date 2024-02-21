import s from "./Header.module.scss";
import Container from "../Conteiner/Container.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

const Header = ({setActive, active}) => (
  <header className={s.header}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
        <button className="header__button-burger" onClick={() => setActive(!active)}>
            <span className="header__button-line"/>
        </button>
        <Navigation active={active} setActive={setActive}/>
    </Container>
  </header>
);
export default Header;