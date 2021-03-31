import React from "react";
import { Link } from "react-router-dom";
import style from "./HeaderRegistration.module.scss";


class HeaderRegistration extends React.PureComponent {

    render(){
        return(
            <Link to="/registration">
            <a href="fff" className={style.header_registration}>Регистрация</a>
            </Link>
        );
    }
}

export default HeaderRegistration;