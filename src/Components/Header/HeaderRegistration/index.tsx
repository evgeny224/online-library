import React from "react";
import style from "./HeaderRegistration.module.scss";


class HeaderRegistration extends React.PureComponent {

    render(){
        return(
            <a href="http//google.com" className={style.header_registration}>Регистрация</a>
        );
    }
}

export default HeaderRegistration;