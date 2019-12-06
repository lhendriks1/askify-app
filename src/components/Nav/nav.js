import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QAContext } from '../../QaContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Hyph } from '../Utils/Utils'
import './nav.css';
import TokenService from '../../services/token-service';

export default function Nav() {
    const navOptions= useLoginStatus()

    return (
        <nav className="Nav">
            <Link to="/">
                <span className="logo">
                    {' '}
                    AskifyLogo
                </span>
            </Link>
            <div className="profile-tools">
                {navOptions}
            </div>
        </nav>
    )
}

function useLoginStatus() {
    const { setLoginStatus } = useContext(QAContext)

    const handleLogoutClick = () => {
        setLoginStatus(false)
        TokenService.clearAuthToken()
    }

    const renderLogoutLink = () => (
            <div className='Nav__logged-in'>
                <Link
                    onClick={handleLogoutClick}
                    to='/'>
                        Logout
                </Link>
            </div>
    );

    const renderLoginLink = () => (
            <div className='Nav__not-logged-in'>
                <Link to='/register'>
                    Register
                </Link>
                <Hyph />
                <Link to="/login">
                    Log in
                </Link>
            </div>
    );

    return TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()
}

