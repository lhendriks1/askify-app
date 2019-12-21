import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import TokenService from '../../services/token-service'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Hyph } from '../Utils/Utils'
import './nav.css'

export default function Nav() {
    const { isLoggedIn, logInRender, logOutRender } = useLoginStatus()
    const {loginStatus}= useContext(AuthContext)

    return (
        <nav className="Nav">
            <Link to="/">
                <span className="logo">
                    {' '}
                    AskifyLogo
                </span>
            </Link>
            <div className="profile-tools">
                {loginStatus ? logOutRender : logInRender}
            </div>
        </nav>
    )
}

function useLoginStatus() {
    const { updateLoginStatus } = useContext(AuthContext)

    const handleLogoutClick = () => {
        updateLoginStatus(false)
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

    return {
        isLoggedIn: TokenService.hasAuthToken(),
        logInRender: renderLoginLink(),
        logOutRender: renderLogoutLink(),
    }
}

