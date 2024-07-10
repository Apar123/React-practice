import React, { useState } from 'react';
import * as yup from 'yup';
import '../css/Signup.css';
import TextField from './TextField';

export default function Signup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const schema = yup.object().shape({
    firstname: yup.string().required("Fristname is required"),
    lastname: yup.string().required("lastname is required."),
    email: yup.string().email("Provide a valid Email address...").required("Email is required..."),
    password: yup.string().required("password is required..."),
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    try {
      let validForm = await schema.isValid(formObj)
      if (validForm) {
        // submit the form
      }
      else {
        await schema.validate(formObj, { abortEarly: false })
      }
    }
    catch (err) {
      setErrors(err.errors);
      console.log(err)
    }
    console.log('getting triggered', formObj)
  }

  const handleInputChange = (event, setFun) => {
    const { value } = event.target;
    setFun(value);
  }

  return (
    <div className="parentContainer">
      <div className="signup-form">
        <form onSubmit={handleFormSubmit}>
          {console.log('errors', errors)}
          <>
            <div style={{ margin: '0.5rem' }}>
              First Name
            </div>
            <TextField type="text" name="firstname" placeholder="Enter your first name" value={firstname} handleInputChange={handleInputChange} setFun={setFirstname} />
            {errors?.[0] && <div className='error'>{errors?.[0]}</div>}
          </>
          <>
            <div style={{ margin: '0.5rem' }}>
              Last Name
            </div>
            <TextField type="text" name="lastname" placeholder="Enter your last name" value={lastname} handleInputChange={handleInputChange} setFun={setLastname} />
            {errors?.[1] && <div className='error'>{errors?.[1]}</div>}
          </>
          <>
            <div style={{ margin: '0.5rem' }}>
              Email
            </div>
            <TextField type="email" name="email" placeholder="Enter your email" value={email} handleInputChange={handleInputChange} setFun={setEmail} />
            {errors?.[2] && <div className='error'>{errors?.[2]}</div>}
          </>
          <>
            <div style={{ margin: '0.5rem' }}>
              Password
            </div>
            <TextField type="password" name="password" placeholder="Enter the password" value={password} handleInputChange={handleInputChange} setFun={setPassword} />
            {errors?.[3] && <div className='error'>{errors?.[3]}</div>}
          </>
          <div>
            <button type='submit'>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
