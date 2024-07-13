import { INCREMENT_COUNT, DECREMENT_COUNT } from "./UseCallbackActionType";

const incrementCount = () => {
    return {
        type: INCREMENT_COUNT,
    }
}

const decrementCount = () => {
    return {
        type: DECREMENT_COUNT,
    }
}

export {
    incrementCount,
    decrementCount,
}