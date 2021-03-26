import React from "react";
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
                <a href="http//google.com" className={style.header_input}>Вход</a>
                <HeaderRegistration />
            </header>
            </>
        );
    }
}

export default Header;