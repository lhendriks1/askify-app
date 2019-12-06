import React, { useContext } from 'react';
import { Section } from '../../components/Utils/Utils';
import { QAContext } from '../../QaContext';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage(props) {

    const { setLoginStatus, setRegistrationMsg } = useContext(QAContext)

    //TODO: update registration message logic so it only works on each user
    const handleRegistrationSuccess = user => {
        setLoginStatus(true);
        setRegistrationMsg("Successful user registration")
        setTimeout(() => setRegistrationMsg(''), 10000)

        const { history } = props;
        history.push('/dashboard');
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