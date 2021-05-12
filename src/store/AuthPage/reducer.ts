import { IAuthPage } from "./types";
import { AuthPageActionType } from "./actions"

const intialState: IAuthPage = {
    login: "",
};

const authPageReducer = (state=intialState, action: {type:string; payload?: any}) => {
    switch(action.type){
        case AuthPageActionType.userLogin:
            return{

                ...state,
                login: action.payload,
            };
            default:
                return state;
    }
};

export default authPageReducer;