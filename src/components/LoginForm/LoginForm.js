import React, { useContext } from 'react';
import { QAContext } from '../../QaContext';
import { Button, Input } from '../Utils/Utils';
import TokenService from '../../services/token-service';

export default function LoginForm(props) {

    //TODO: move errorDiv to Utils since it is used many times
    const {error} = useContext(QAContext);
    const errorDiv = error ? <div className="error">{error}</div> : '';


    const handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target

        console.log('login form submitted')
        console.log({ user_name, password })

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        props.onLoginSuccess()
    }

    return (
        <form
            className='LoginForm'
            onSubmit={handleSubmitBasicAuth}
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
            <div clssName='password'>
                <label htmlFor="LoginForm__password">
                    Password
                </label>
                <Input
                    name='password'
                    id="LoginForm__password">
                </Input>
            </div>
            <Button type='submit'>
                Login
            </Button>
        </form>
    )

}
