import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'
import { Button, Input } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

export default function LoginForm(props) {

    //TODO: move errorDiv to Utils since it is used many times
    const {error, updateErrorMsg} = useContext(AuthContext);
    const errorDiv = error ? <div className="error">{error}</div> : '';


    const handleSubmitJwtAuth = e => {
        e.preventDefault()
        updateErrorMsg(null)
        const { user_name, password } = e.target

        AuthApiService.postLogin({
           user_name: user_name.value,
           password: password.value,
        })
        .then(res => {
            user_name.value=''
            password.value=''
            props.onLoginSuccess()
        })
        .catch(res => {
            updateErrorMsg(res.error)
        })
    }

    return (
        <form
            className='LoginForm'
            onSubmit={handleSubmitJwtAuth}
        >
            {errorDiv}
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
            <Button type='submit'>
                Login
            </Button>
        </form>
    )

}
