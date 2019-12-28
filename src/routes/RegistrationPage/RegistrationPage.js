import React, { useContext } from 'react';
import { Section } from '../../components/Utils/Utils';
import { AuthContext } from '../../contexts/AuthContext';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage(props) {
    const { updateLoginStatus, updateRegistrationMsg } = useContext(AuthContext);

    const handleRegistrationSuccess = user => {
        updateLoginStatus(true);
        updateRegistrationMsg("Successful user registration");
        setTimeout(() => updateRegistrationMsg(''), 10000);
        props.history.push('/dashboard');
    };

    return (
        <Section className='RegistrationPage'>
            <h2>Register</h2>
            <RegistrationForm
                onRegistrationSuccess={handleRegistrationSuccess}
            />
        </Section>
    );
}