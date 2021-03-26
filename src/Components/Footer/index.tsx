import React from "react";
import style from "./Footer.module.scss"
import vk from "../../assets/image/el_vkontakte.png";
import facebook from "../../assets/image/el_facebook.png";
import youtube from "../../assets/image/vaadin_youtube-square.png";






class Footer extends React.PureComponent {

    render(){
        return(
            <>
            <footer className={style.footer_wrapper}>
                <div className={style.footer_email}>Наш E-mail: onlinelib@gmail.ru</div>
                <div>
                    <div className={style.footer_social}>Наша библеотека в соц. сетях</div>
                    <a href="http//google.com"><img src= {vk} alt={vk} className={style.vk} /></a>
                    <a href="http//google.com"><img src= {facebook} alt={vk} className={style.facebook} /></a>
                    <a href="http//google.com"><img src= {youtube} alt={vk} className={style.youtube} /></a>
                </div>
                <a href="http//google.com" className={style.footer_agreement}>Пользовательское соглашение</a>
            </footer>
            </>
        );
    }
}

export default Footer;