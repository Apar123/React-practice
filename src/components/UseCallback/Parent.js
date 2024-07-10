import React, { useCallback, useState } from 'react';
import Child from './Child';

export default function Parent() {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
        setCount(pevCount => pevCount + 1);
    }, []);

    const decrementCount = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <Child
                incrementCount={incrementCount}
                decrementCount={decrementCount}
            />
        </div>
    )
};
