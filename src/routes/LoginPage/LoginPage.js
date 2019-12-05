import React, {useContext} from 'react';
import { QAContext } from '../../QaContext';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Utils/Utils';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage(props) {

    const { loginStatus, setLoginStatus } = useContext(QAContext)
    const handleLoginSuccess = () => {
        setLoginStatus(true);
        const { history } = props;
        history.push('/dashboard');
    }

    return (
        <Section className='LoginPage'>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </Section>
    )

}