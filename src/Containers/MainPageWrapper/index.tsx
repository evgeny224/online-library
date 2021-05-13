import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../../Components/Content";
import PageWrapper from "../../Components/Common/PageWrapper";
import first_slide from "../../assets/image/slider-1.png";
import second_slide from "../../assets/image/slider-2.png";
import third_slide from "../../assets/image/slider-3.png";
import { getSliderDataAction } from "../../store/MainPage/actions";


const imageArrow = [
    {id: 1, link: first_slide, description:"Картинка с книгами №1"},
    {id: 2, link: second_slide, description:"Картинка с книгами №2"},
    {id: 3, link: third_slide, description:"Картинка с книгами №3"},
];



const MainPageWrapper = () => {
    const dispatch = useDispatch();
    const getData = () =>{
        dispatch(getSliderDataAction(imageArrow));
    }
    useEffect(getData, [dispatch]);

        return(
            <>
                <PageWrapper>
                    <Content />
                </PageWrapper>
            </>
        );
    
    };


export default MainPageWrapper;

function useDispathc() {
    throw new Error("Function not implemented.");
}
