import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Section } from '../../components/Utils/Utils';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage(props) {

    const { updateLoginStatus } = useContext(AuthContext)
    const handleLoginSuccess = () => {
        updateLoginStatus(true);
        const { history } = props;
        history.push('/dashboard');
    }

    return (
        <Section className='LoginPage'>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </Section>
    );

}