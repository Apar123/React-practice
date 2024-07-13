import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoList } from './Redux/TodoList/TodoSlice';

export default function TodoList() {
    const state = useSelector(state => state.Todo);
    const dipatch = useDispatch();

    useEffect(() => {
        dipatch(fetchTodoList());
        /* if we return from action we can directly get the returned value with .then */
        // dispatch(fetchTodoList()).then((results) => console.log(results));


        /* another way */
        // (async() => {
        //   const response = await dipatch(fetchTodoList());
        //   console.log(response);
        // })();
    }, []);

    if (state.fetchingTodo) {
        return <h2>Loading ...</h2>
    }
    const { data } = state;

    return (
        <div style={{ padding: '1rem' }}>
            <h1>
                Todo List
            </h1>
            {
                data && data.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))
            }
        </div>
    )
};