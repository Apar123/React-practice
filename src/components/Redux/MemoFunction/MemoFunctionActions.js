import {
    INCREMENT_COUNTER1,
    INCREMENT_COUNTER2,
} from "./MemoFuncActionType";

export const incrementCounter1 = () => {
    return {
        type: INCREMENT_COUNTER1,
    }
};

export const incrementCounter2 = () => {
    return {
        type: INCREMENT_COUNTER2,
    }
}