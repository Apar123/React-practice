import { INCREMENT_COUNT, DECREMENT_COUNT } from "./UseCallbackActionType";

const initalState = {
    count: 0,
};

const useCallbackReducer = (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }
};

export default useCallbackReducer;