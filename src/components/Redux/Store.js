import { configureStore } from  '@reduxjs/toolkit';
import logger from 'redux-logger';
import nameReducer from './useRef/UseRefReducer';
import memoReducer from './MemoFunction/MemoFuncReducer';
import useCallbackReducer from './useCallBack/UseCallbackReducer';
/* use of the logger is mostly in development servers */

const store = configureStore({
    reducer: {
        nameReducer,
        memoReducer,
        useCallbackReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;