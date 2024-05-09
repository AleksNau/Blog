import {useState} from "react";
import Header from "./veaws/Header/Header.jsx";
import Main from "./veaws/Main/Main.jsx";
import Footer from "./veaws/Footer/Footer.jsx";
import "./App.css";

function App() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <Header active={menuActive} setActive={setMenuActive}/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
