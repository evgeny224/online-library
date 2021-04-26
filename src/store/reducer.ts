import { IInitState } from "./types";
import { ActionType } from "./actions"

const intialState: IInitState = {
    login: "",
};

const reducer = (state=intialState, action: {type:string; payload?: any}) => {
    switch(action.type){
        case ActionType.userLogin:
            return{

                ...state,
                login: action.payload,
            };
            default:
                return state;
    }
};

export default reducer;