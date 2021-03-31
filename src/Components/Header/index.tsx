import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import HeaderLogo from "./HeaderLogo";
import HeaderRegistration from "./HeaderRegistration";
import HeaderSearch from "./HeaderSearch";






class Header extends React.PureComponent {

    render(){
        return(
            <>
            <header className={style.header_wrapper}>
                <HeaderLogo />
                <a href="http//google.com" className={style.header_library}>Электронная библиотека</a>
                <a href="http//google.com" className={style.header_info}>О нас</a>
                <HeaderSearch />
                <Link to="/auth">
                <a href="http//google.com" className={style.header_input}>Вход</a>
                </Link>
                <HeaderRegistration />
            </header>
            </>
        );
    }
}

export default Header;