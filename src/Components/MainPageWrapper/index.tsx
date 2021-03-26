import React from "react";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import style from "./MainPageWrapper.module.scss"




class MainPageWrapper extends React.PureComponent {

    render(){
        return(
            <>
            <div className={style.main_page_wrapper}>
                <Header />
                <Content />
                <Footer />
            </div>
            </>
        );
    }
}

export default MainPageWrapper;