import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail } from './Redux/Form/FormSlice';

export default function FormComponent() {

    const dispatch = useDispatch();
    const { name, email } = useSelector(state => {
        const { formReducer } = state;
        return {
            name: formReducer.name,
            email: formReducer.email,
        }
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                dispatch(setName(value));
                break;
            case 'email':
                dispatch(setEmail(value));
                break;
            default:
                break;
        }
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input name="name" type="text" placeholder='Full Name' value={name} onChange={(e) => handleInputChange(e)} />
                <br />
                <input name="email" type="email" placeholder='example@gmail.com' value={email} onChange={(e) => handleInputChange(e)} />
                <br />
                <button type="submit">
                    Submit Form
                </button>
            </form>
        </div>
    )
};