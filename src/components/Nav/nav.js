
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import TokenService from '../../services/token-service';
import Button from '@material-ui/core/Button';
import logo from '../../resources/logo.png';
import hummingbird from '../../resources/hummingbird.png';
// import Link from '@material-ui/core/Link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Hyph } from '../Utils/Utils';
import './nav.css';

//TODO Credit logo author Image by <a href="https://pixabay.com/users/pholdrep-5575235/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3935655">Pedro Araújo</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3935655">Pixabay</a>
export default function Nav() {
    const { logInRender, logOutRender } = useLoginStatus();
    const {loginStatus}= useContext(AuthContext);

    return (
        <nav className="Nav">
            <Link to="/">
                <span className="logo">
                    {' '}
                    <img id='Nav__logo' src={hummingbird} />
                </span>
            </Link>
            <div className="profile-tools">
                {loginStatus ? logOutRender : logInRender}
            </div>
        </nav>
    )
};

function useLoginStatus() {
    const { updateLoginStatus } = useContext(AuthContext);

    const LinkRegister = React.forwardRef((props, ref) => (
        <Link innerRef={ref} {...props} />
    ))

    const LinkLogin = React.forwardRef((props, ref) => (
        <Link innerRef={ref} {...props} />
    ))

    const LinkLogout = React.forwardRef((props, ref) => (
        <Link innerRef={ref} {...props} />
    ))

    const handleLogoutClick = () => {
        updateLoginStatus(false);
        TokenService.clearAuthToken();
    };

    const renderLogoutLink = () => (
            <div className='Nav__logged-in'>
                    <Button color='primary' variant='text' size='small' component={LinkLogout} to='/' onClick={handleLogoutClick}>
                        Logout
                    </Button>
            </div>
    );

    const renderLoginLink = () => (
            <div className='Nav__not-logged-in'>
                <Button color='primary' variant='text'  size='small' component={LinkRegister} to='/register'>
                    Register
                </Button>
                <Hyph />
                    <Button color='primary' variant='text' size='small' component={LinkLogin} to="/login">
                        Log in
                    </Button>
            </div>
    );

    return {
        isLoggedIn: TokenService.hasAuthToken(),
        logInRender: renderLoginLink(),
        logOutRender: renderLogoutLink(),
    }
};

