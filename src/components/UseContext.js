import React, { useContext } from 'react';
import { MyContext } from '../App';

/* 
1. Create context from where you need to send the data
2. Add Provider there and pass the data from that component
3. Make the use of useContext, pass the create context inside the useContext and we will be
able to access the data from that component.
*/

export default function UseContext() {
    const dataFromApp = useContext(MyContext);
    return (
        <div>
            <h1>
                {`Hello my name is ${dataFromApp.name} and i am from ${dataFromApp.place}`}
            </h1>
        </div>
    )
}