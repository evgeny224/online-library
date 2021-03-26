import React from "react";
import style from "./HeaderSearch.module.scss"




class HeaderSearch extends React.PureComponent {

    render(){
        return(
            <input className={style.header_search} />
            );
    }
}

export default HeaderSearch;