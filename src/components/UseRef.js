import React, { useState, useRef } from 'react';

/* useRef directly manipulate the dom */
export default function UserRef() {
  const [name, setName] = useState('');
  const colorRef = useRef('');

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
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