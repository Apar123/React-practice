import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './Redux/useRef/UserRefActions';

/* useRef directly manipulate the dom */
export default function UserRef() {
  const colorRef = useRef('');

  const name = useSelector((state) => {
    const { nameReducer } = state;
    return nameReducer.name;
  });

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const { value } = event.target;
    dispatch(changeName(value));
  }

  const changeInputColor = (value) => {
    if (value) {
      colorRef.current.style.color = 'red';
    } else {
      colorRef.current.style.color = '';
    }
  }


  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <input ref={colorRef} value={name} onChange={handleNameChange} />
      <button onClick={() => changeInputColor(true)}>
        Color Red
      </button>
      <button onClick={() => changeInputColor(false)}>
        Rest color
      </button>
    </div>
  )
};