import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Signup from './components/Signup';
import MemoFunction from './components/MemoFunction';
import Context from './components/Context';
import Parent from './components/UseCallback/Parent';
import UseContext from './components/UseContext';
import UserRef from './components/UseRef';
import store from './components/Redux/Store';
import FormComponent from './components/Form';
import TodoList from './components/TodoList';

const MyContext = createContext();

/* create context, provider, consumer */

export default function App() {
  const obj = {
    name: 'Apar',
    email: 'apar@gmail.com',
    place: 'kangra',
  }
  return (
    <div>
      <Provider store={store}>
        {/* <MyContext.Provider value={obj}> */}
        {/* <Signup /> */}
        {/* <Context /> */}
        {/* <MemoFunction /> */}
        {/* <Parent /> */}
        {/* <FormComponent/> */}
        <TodoList/>
        {/* <UseContext /> */}
        {/* <UserRef /> */}
        {/* </MyContext.Provider> */}
      </Provider>
    </div>
  )
};

export {
  MyContext
};