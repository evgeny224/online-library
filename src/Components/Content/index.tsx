import React from "react";
import style from "./Content.module.scss"






class Content extends React.PureComponent {

    render(){
        return(
            <>
                <div className={style.content_wrapper}>Content</div>
            </>
        );
    }
}

export default Content;