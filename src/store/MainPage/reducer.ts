import { IMainPage } from "./types";
import { MainPageActionType } from "./actions"

const intialState: IMainPage = {
    data: "",
};

const mainPageReducer = (state=intialState, action: {type:string; payload?: any}) => {
    switch(action.type){
        case MainPageActionType.getSliderData:
            return{

                ...state,
                data: action.payload,
            };
            default:
                return state;
    }
};

export default mainPageReducer;