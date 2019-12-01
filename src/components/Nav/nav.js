import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import logo from '../../resources/logo.png'
import './nav.css';

function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo" className="logo"/>
            <div className="profile-tools">
                {/* <button type="button">Logout</button>
                <button type="button">Username</button> */}
                <button type="button" className="nav-options"><FontAwesomeIcon icon={faEllipsisH}/>
</button>
            </div>
        </nav>
    )
}

export default Nav;