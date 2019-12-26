import React, { useState } from 'react';
import { Input } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import { Button } from '@material-ui/core';

export default function LoginForm(props) {
    const [error, setError] = useState(null);
    const errorDiv = error 
        ? <div className="error">
            <i class="material-icons">error_outline</i>
            {error}
          </div> 
        : '';

    const handleSubmitJwtAuth = e => {
        e.preventDefault();
        setError(null);
        const { user_name, password } = e.target;

        AuthApiService.postLogin({
           user_name: user_name.value,
           password: password.value,
        })
        .then(res => {
            user_name.value='';
            password.value='';
            props.onLoginSuccess();
        })
        .catch(res => {
            setError(res.error);
        })
    };

    return (
        <form
            className='LoginForm'
            onSubmit={handleSubmitJwtAuth}
        >
            <div className='user_name'>
                <label htmlFor='LoginForm__user_name'>
                    User name
                </label>
                <Input
                    name='user_name'
                    id='LoginForm__user_name'
                    >    
                </Input>
            </div>
            <div className='password'>
                <label htmlFor="LoginForm__password">
                    Password
                </label>
                <Input
                    name='password'
                    id='LoginForm__password'
                    type='password'
                >
                </Input>
            </div>
            {errorDiv}
            <Button type='submit' variant='contained' color='default'>
                Login
            </Button>
        </form>
    )

}
