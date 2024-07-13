import { INCREMENT_COUNTER1, INCREMENT_COUNTER2 } from "./MemoFuncActionType";

const initialState = {
    counter1: 0,
    counter2: 0,
};

const memoReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER1:
            return {
                ...state,
                counter1: state.counter1 + 1,
            };
        case INCREMENT_COUNTER2:
            return {
                ...state,
                counter2: state.counter2 + 1,
            };

        default:
            return state;
    }
}

export default memoReducer;