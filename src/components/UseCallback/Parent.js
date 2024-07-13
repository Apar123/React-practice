import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../Redux/useCallBack/UseCallbackActions';
import Child from './Child';

export default function Parent() {
    const count = useSelector(state => {
        const { useCallbackReducer } = state;
        return useCallbackReducer.count;
    });

    const dispatch = useDispatch();

    const incCount = useCallback(() => {
        dispatch(incrementCount());
    }, [dispatch]);

    const decCount = useCallback(() => {
        dispatch(decrementCount());
    }, [dispatch]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <Child
                incrementCount={incCount}
                decrementCount={decCount}
            />
        </div>
    )
};
