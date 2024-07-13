import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import nameReducer from './useRef/UseRefReducer';
import memoReducer from './MemoFunction/MemoFuncReducer';
import useCallbackReducer from './useCallBack/UseCallbackReducer';
import formReducer from './Form/FormSlice.js';
import todoReducer from './TodoList/TodoSlice.js';
/* use of the logger is mostly in development servers */

const store = configureStore({
    reducer: {
        nameReducer,
        memoReducer,
        useCallbackReducer,
        formReducer: formReducer,
        Todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;