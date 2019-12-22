import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import AuthApiService from '../../services/auth-api-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import TokenService from '../../services/token-service'
import './LandingPage.css'

export default function LandingPage() {
    const history = useHistory()
    const { loginStatus, updateLoginStatus } = useContext(AuthContext)
    const [error, setError] = useState(null)

  function loginAsTestUser() {
      console.log('login as guest clicked')
    setError(null)
    AuthApiService.postGuestLogin()
     .then(res => {
        updateLoginStatus(true)
        console.log('before history')
        history.push('/dashboard')
    })
     .catch(res => {
         setError(res.error)
     })
    }

    return (
        <>
            <div className="homepage-wrapper">
                <section className="section-one landing-page">
                    <h1>Askify</h1>
                    <span className="tagline">Your team's dedicated Q&A platform</span>
                    <p>Askify connects users across team lines to fill information gaps, increase innovation, and stimulate leadership. Tap into the knowledge of experienced employees and start leveraging and growing your organizational knowledge base.</p>
                    <button className="live-prev" onClick={() => loginAsTestUser()}>Preview as Guest</button>
                </section>
                <section className="section-two landing-page">
                    <h2>Manage Organizational Knowledge</h2>
                    <h3>Give your team the upper hand</h3>
                    <ul className="benefits">
                        <li>Delve into your organizational knowledgebase to identify and fill knowledge gaps.</li>
                        <li>Organically create leadership opportunities for knowledgeable employees.</li>
                        <li>Store data in a secure online space accessible only to authorized users.</li>
                    </ul>
                </section>
                <section className="section-three landing-page">
                    <h2>How it works + features</h2>
                    <h3>Knowledge sharing at its best</h3>
                    <p>[Placeholder for images of features in use + their benefits]</p>
                </section>
                <footer>
                    <p>Created by Lydia Hendriks</p>
                    <ul className="contact">
                        <li><FontAwesomeIcon icon={faLinkedinIn} size="lg"/></li>
                        <li><FontAwesomeIcon icon={faGithub} size="lg"/></li>
                        <li><FontAwesomeIcon icon={faLaptopCode} size="lg" ></FontAwesomeIcon></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}