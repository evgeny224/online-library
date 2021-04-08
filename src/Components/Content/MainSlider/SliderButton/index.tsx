import React from "react";
import style from "./SliderButton.module.scss";

interface IProps {
    handler(): void;
    discription: string;
}


class SliderButton extends React.PureComponent<IProps>{
    render(){
        const { handler,  discription } = this.props;
        return (
            <>
                <button
                className={style["slider-button"]}
                type="button"
                onClick={handler}>
                {discription}
                </button>
            </>
        );
    }
}

export default SliderButton;