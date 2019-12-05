import React, {useContext} from 'react';
import { QAContext } from '../../QaContext';
import { Button, Input, Required } from '../Utils/Utils'

export default function RegistrationForm(props) {
    //TODO: ADD ERROR RESET TO NULL & ERROR HANDLING
    const {error} = useContext(QAContext)
    const errorDiv = error ? <div className="error">{error}</div> : '';



    const handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, user_name, password } = ev.target

        console.log('registration form submitted')
        console.log({full_name, user_name, password})

        full_name.value = ''
        user_name.value = ''
        password.value = ''
        props.onRegistrationSuccess()
    }

    return(
        <form className='RegistrationForm'
            onSubmit={handleSubmit}
        >
            {errorDiv}
            <div className='full_name'>
                <label htmlFor='RegistrationForm__full_name'>
                    Full name <Required />
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
                    User name <Required />
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
                    Password <Required />
                </label>
                <Input
                    name='password'
                    type='password'
                    required
                    id='RegistrationForm__password'
                    >
                </Input>
            </div>
            <Button type='submit'>
                Register
            </Button>
        </form>
    )
}