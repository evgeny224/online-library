import React from "react";
import style from "./HeaderLogo.module.scss";
import logo from "../../../assets/image/logo.png";




class HeaderLogo extends React.PureComponent {

    render(){
        return(
            
                <img src= {logo} alt={logo} className={style.logo} />
            
        );
    }
}

export default HeaderLogo;