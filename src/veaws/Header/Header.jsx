import s from "./Header.module.scss";
import Container from "../Container/Container.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

const Header = ({setActive, active}) => (
  <header className={s.header}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
        <button className={s.button} onClick={() => setActive(!active)}>

        </button>
        <Navigation active={active} setActive={setActive}/>
    </Container>
  </header>
);
export default Header;