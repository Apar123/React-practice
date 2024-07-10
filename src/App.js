import React, { createContext } from 'react';
import './App.css';
import Signup from './components/Signup';
import Context from './components/Context';
const MyContext = createContext();

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
        <Context />
      </MyContext.Provider>
    </div>
  )
};

export {
  MyContext
};