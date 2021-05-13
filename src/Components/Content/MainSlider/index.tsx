import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./MainSlider.module.scss";
import SlideButton from "./SliderButton";
import SlideItem from "./SliderItem";
import first_slide from "../../../assets/image/slider-1.png";
import second_slide from "../../../assets/image/slider-2.png";
import third_slide from "../../../assets/image/slider-3.png";
import { getSliderData } from "../../../store/MainPage/selectors";





// const imageArrow = [
//     {id: 1, link: first_slide, description:"Картинка с книгами №1"},
//     {id: 2, link: second_slide, description:"Картинка с книгами №2"},
//     {id: 3, link: third_slide, description:"Картинка с книгами №3"},
// ];

    const Slider =() => {
        const [sliderData, setSliderData] = useState({ currentImage: 0 });
        const imageArr = useSelector(getSliderData);

    const    prevImage = () => {
            const { currentImage } = sliderData;
            if(currentImage === 0 ){
                setSliderData({ currentImage: imageArr.length - 1 });
            }else {
                setSliderData({ currentImage: currentImage - 1 });
            }
        };

    const    nextImage = () => {
            const { currentImage } = sliderData;
            if(currentImage === imageArr.length - 1){
                setSliderData({ currentImage: 0 })
            }else {
                setSliderData({ currentImage: currentImage + 1 });
            }
        };

        
            const { currentImage } = sliderData;
            return(
                <>
                    <div className={style.slider_wrapper}>
                        <SlideButton handler={prevImage} discription="prev" />
                        <SlideItem 
                        link={imageArr[currentImage]?.link}
                        description={imageArr[currentImage]?.description}
                        />
                        <SlideButton handler={prevImage} discription="next" />
                    </div>
                </>
            );
        }


export default Slider;



