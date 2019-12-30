import React, { useState } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Input } from '../Utils/Utils';
import { Button } from '@material-ui/core';
import './RegistrationForm.css';

export default function RegistrationForm(props) {
    const [error, setError] = useState(null)
    const errorDiv = error 
        ? <div className="error">
            <i class="material-icons error-icon">error_outline</i>
            {error}
          </div> 
        : '';

    const handleSubmit = e => {
        e.preventDefault();
        setError(null);
        
        const { full_name, user_name, password } = e.target;

        AuthApiService.postUser({
            full_name: full_name.value, 
            user_name: user_name.value, 
            password: password.value
        })
            .then(user => {
                full_name.value = '';
                user_name.value = '';
                password.value = '';
                props.onRegistrationSuccess();
            })
            .catch(res => {
                setError(res.error);
            })
    };

    return(
        <form className='RegistrationForm'
            onSubmit={handleSubmit}
        >  
            <div className='full_name'>
                <label htmlFor='RegistrationForm__full_name'>
                    Full name
                </label>
                <Input
                    name='full_name'
                    type='text'
                    required
                    id='RegistrationForm__full_name'>
                </Input>
            </div>
            <div className='user_name'>
                <label htmlFor='RegistrationForm__user_name'>
                    User name
                </label>
                <Input
                    name='user_name'
                    type='text'
                    required
                    id='RegistrationForm__user_name'>
                </Input>
            </div>
            <div className='password'>
                <label htmlFor='RegistrationForm__password'>
                    Password
                </label>
                <Input
                    name='password'
                    type='password'
                    required
                    id='RegistrationForm__password'
                    >
                </Input>
            </div>
            <div className='confirm-password'>
                <label htmlFor="LoginForm__confirm-password">
                    Retype Password
                </label>
                <Input
                    name='confirm-password'
                    type="password"
                    required
                    id="LoginForm__confirm-password">
                </Input>
            </div>
            {errorDiv}
            <Button type='submit' variant='contained' color='default'>
                Register
            </Button>
        </form>
    )
}