import React, { FC } from "react";
import style from "./SliderButton.module.scss";

interface IProps {
    handler(): void;
    discription: string;
}


    const SliderButton: FC<IProps> =(props: IProps)=>{

        const { handler,  discription } = props;
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


export default SliderButton;