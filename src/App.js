import React, { createContext } from 'react';
import './App.css';
import Signup from './components/Signup';
import MemoFunction from './components/MemoFunction';
import Context from './components/Context';
import Parent from './components/UseCallback/Parent';
import UseContext from './components/UseContext';
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
      <MyContext.Provider value={obj}>
        {/* <Signup /> */}
        {/* <Context /> */}
        {/* <MemoFunction /> */}
        {/* <Parent /> */}
        <UseContext />
      </MyContext.Provider>
    </div>
  )
};

export {
  MyContext
};