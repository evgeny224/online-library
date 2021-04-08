import React from "react";
import style from "./MainSlider.module.scss";
import first_slide from "../../../assets/image/slider-1.png";
import second_slide from "../../../assets/image/slider-2.png";
import third_slide from "../../../assets/image/slider-3.png";
import SlideButton from "./SliderButton";
import SlideItem from "./SliderItem";

interface IState {
    currentImage: number;
}

const imageArrow = [
    {id: 1, link: first_slide, description:"Картинка с книгами №1"},
    {id: 2, link: second_slide, description:"Картинка с книгами №2"},
    {id: 3, link: third_slide, description:"Картинка с книгами №3"},
];

    class Slider extends React.Component<any, IState> {
        constructor(props: any){
            super(props);
            this.state = { currentImage: 0 };
        }

        prevImage = () => {
            const { currentImage } = this.state;
            if(currentImage === 0 ){
                this.setState({ currentImage: imageArrow.length - 1 });
            }else {
                this.setState({ currentImage: currentImage - 1 });
            }
        };

        nextImage = () => {
            const { currentImage } = this.state;
            if(currentImage === imageArrow.length - 1){
                this.setState({ currentImage: 0 })
            }else {
                this.setState({ currentImage: currentImage + 1 });
            }
        };

        render(){
            const { currentImage } = this.state;
            return(
                <>
                    <div className={style.slider_wrapper}>
                        <SlideButton handler={this.prevImage} discription="prev" />
                        <SlideItem 
                        link={imageArrow[currentImage].link}
                        description={imageArrow[currentImage].description}
                        />
                        <SlideButton handler={this.prevImage} discription="next" />
                    </div>
                </>
            );
        }
}

export default Slider;



