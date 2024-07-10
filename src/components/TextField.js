import React from 'react'
import '../css/TextField.css';

export default function TextField({ handleInputChange, setFun, ...props }) {
  return (
      <input {...props} className='input-field' onChange={(e) => handleInputChange(e, setFun)} />
  )
}
