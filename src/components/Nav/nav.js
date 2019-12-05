import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QAContext } from '../../QaContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Hyph } from '../Utils/Utils'
import logo from '../../resources/logo.png'
import './nav.css';
import TokenService from '../../services/token-service';

export default function Nav(props) {

    const { loginStatus, setLoginStatus } = useContext(QAContext)

    const handleLogoutClick = () => {
        setLoginStatus(false)
        TokenService.clearAuthToken()
    }

    useEffect(() => 
        () => LoginOrLogout(),
        [loginStatus]
    )

    function LoginOrLogout() {
        return TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()
    }

    function renderLogoutLink() {
        return (
            <div className='Nav__logged-in'>
                <Link
                    onClick={handleLogoutClick}
                    to='/'>
                        Logout
                </Link>
            </div>
        )
    }

    function renderLoginLink() {
        return (
            <div className='Nav__not-logged-in'>
                <Link to='/register'>
                    Register
                </Link>
                <Hyph />
                <Link to="/login">
                    Log in
                </Link>
            </div>
        )
    }


    return (
        <nav className="Nav">
            <Link to="/">
                <span className="logo">
                    {' '}
                    AskifyLogo
                </span>
            </Link>
            <div className="profile-tools">
                <LoginOrLogout />
                {/* {loggedIn
                    ? renderLogoutLink()
                    : renderLoginLink()
                } */}
                {/* <button type="button" className="nav-options"><FontAwesomeIcon icon={faEllipsisH}/></button>*/}
            </div>
        </nav>
    )
}

