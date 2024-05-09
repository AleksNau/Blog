import {useContext} from "react";
import s from "./Tag.module.scss";
import FilteredContext from "../../contexts/filteredContext.js";
import {useNavigate} from "react-router-dom";

const Tag = ({category}) => {
    const navigate = useNavigate();
    const action = useContext(FilteredContext);
    return (
        <button
            className={s.tag}
            onClick={() => {
                action(category);
                navigate("/tags");
            }}>
            {category}
        </button>
    );
};

export default Tag;
