import { CHANGE_NAME } from "./UseRefActionType";

const initialState = {
    name: '',
}

const nameReducer = (state =initialState, action) => {
   switch(action.type) {
    case CHANGE_NAME:
        return {
            ...state,
            name : action.payLoad,
        }
        default:
            return state;
   }
}

export default nameReducer;