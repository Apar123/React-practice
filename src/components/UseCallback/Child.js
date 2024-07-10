import React from 'react';

export default React.memo(function Child({incrementCount, decrementCount}) {
    console.log('child component getting triggered')
    return (
        <div>
           <button onClick={() => incrementCount()}>+</button>
           &nbsp;
           <button onClick={() =>decrementCount()}>-</button>
        </div>
    )
});