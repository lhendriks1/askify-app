import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import AuthApiService from '../../services/auth-api-service'
import puzzlePieces from '../../resources/puzzle-pieces.jpg'
import howItWorks from '../../resources/how-it-works.jpg'
import Button from '@material-ui/core/Button';
import hummingbird from '../../resources/hummingbird.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './LandingPage.css'

export default function LandingPage() {
    const history = useHistory()
    const { updateLoginStatus } = useContext(AuthContext)
    const [error, setError] = useState(null)

   const errorDiv = error ? <div>'Guest account is not currently available. You can still access the app by registering and logging in.</div> : ""

  function loginAsTestUser() {
    setError(null)
    AuthApiService.postGuestLogin()
     .then(res => {
        updateLoginStatus(true)
        history.push('/dashboard')
    })
     .catch(res => {
         setError(res.error)
     })
    }

    return (
        <>
            <div className="homepage-wrapper">
                <section className="LandingPage section-one">
                    <div className='LandingPage__logotype-headline'>
                        <img className='Landing_Page__logotype-image' src={hummingbird} />
                        <h1 className='LandingPage__logotype'>Askify</h1>
                    </div>
                    <h2>Your team's dedicated Q&A platform</h2>
                    <p className='LandingPage__tag-line'>Askify connects users across team lines to fill information gaps, increase innovation, and stimulate leadership. Tap into the knowledge of experienced employees and start leveraging and growing your organizational knowledge base.</p>
                    <Button variant='contained' color='primary' onClick={() => loginAsTestUser()}>Preview as Guest</Button>
                    {errorDiv}
                </section>
                <section className="LandingPage section-two">
                    <h2 className='title'>Manage Organizational Knowledge</h2>
                    <h3 className='title'>Give your team the upper hand</h3>
                    <img src={puzzlePieces} className='LandingPage__puzzle-pieces' alt='team holding puzzle pieces'/>
                    <ul className="benefits">
                        <li className='orange'>Delve into your organizational knowledgebase to identify and fill knowledge gaps.</li>
                        <li className='green'>Organically create leadership opportunities for knowledgeable employees.</li>
                        <li className='blue'>Store data in a secure online space accessible only to authorized users.</li>
                    </ul>
                </section>
                <section className="LandingPage section-three">
                    <h2 className='title'>How it works + features</h2>
                    <h3 className='title'>Knowledge sharing at its best</h3>
                    <img src={howItWorks} className='LandingPage__how-it-works' alt='network of web technology'/>
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