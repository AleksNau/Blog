import s from "./Footer.module.scss";
import Container from "../Container/Container.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import Contacts from "../../components/Contacts/Contacts.jsx";


const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.container}>

      <div className={s.logo}>
        <Logo />
      </div>

      <div className={s.contacts}>

        <Contacts />
      </div>
      <p className={s.copyright}>All rights reserved © </p>
    </Container>
  </footer>
);
export default Footer;
