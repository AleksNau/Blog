import React,{useContext} from "react";
import s from "./Tag.module.scss";
import FilteredContext from "../../contexts/filteredContext.js";



const Tag = ({category}) => {
    const action = useContext(FilteredContext);
    return (    <button className={s.tag} onClick={() => action(category)}>
        {category}
    </button>)
}




export default Tag;