import React from 'react';
import { Section } from '../../components/Utils/Utils';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage(props) {

    const handleRegistrationSuccess = user => {
        const { history } = props
        history.push('/login')
    }

    return (
        <Section className='RegistrationPage'>
            <h2>Register</h2>
            <RegistrationForm
                onRegistrationSuccess={handleRegistrationSuccess}
            />
        </Section>
    )
}