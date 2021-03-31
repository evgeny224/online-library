import React from "react";
import { Link } from "react-router-dom";
import style from "./HeaderLogo.module.scss";
import logo from "../../../assets/image/logo.png";




class HeaderLogo extends React.PureComponent {

    render(){
        return(
            <Link to="/">
                <img src= {logo} alt={logo} className={style.logo} />
            </Link>
        );
    }
}

export default HeaderLogo;