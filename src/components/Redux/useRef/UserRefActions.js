import { CHANGE_NAME } from "./UseRefActionType";

export const changeName = (value) => {
    return {
        type: CHANGE_NAME,
        payLoad: value,
    }
}