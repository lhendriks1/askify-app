
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthApiService from '../../services/auth-api-service';
import puzzlePieces from '../../resources/puzzle-pieces.jpg';
import leadership from '../../resources/leadership-5.svg';
import communication from '../../resources/communication.jpg';
import Button from '@material-ui/core/Button';
import brain from '../../resources/brain-1.svg';
import padlock from '../../resources/padlock-1.svg';
import './LandingPage.css';

export default function LandingPage() {
    const history = useHistory();
    const { updateLoginStatus } = useContext(AuthContext);
    const [error, setError] = useState(null);

   const errorDiv = error ? 
        <div className='error'>
             <i className="material-icons error-icon">error_outline</i>
            <p>Guest account is not currently available. You can still access the app by registering and logging in.</p>
        </div> 
        : "";

  function loginAsTestUser() {
    setError(null);
    AuthApiService.postGuestLogin()
     .then(res => {
        updateLoginStatus(true);
        history.push('/dashboard');
    })
     .catch(res => {
         setError(res.error);
     })
    }

    return (
        <>
            <div className="homepage-wrapper">
                <section className="LandingPage section-one">
                    <div className='LandingPage__logotype-headline'>
                        <h1 className='LandingPage__logotype'>Askify</h1>
                    </div>
                    <h2>Your team's dedicated Q&A platform</h2>
                    <p className='LandingPage__tag-line'>Askify connects users across team lines to fill information gaps, increase innovation, and stimulate leadership. Tap into the knowledge of experienced employees and start leveraging and growing your organizational knowledge base.</p>
                    <Button variant='contained' color='primary' onClick={() => loginAsTestUser()}>Demo as Guest</Button>
                    {errorDiv}
                </section>
                <section className="LandingPage section-two">
                    <h2 className='title'>Manage Organizational Knowledge</h2>
                    <h3 className='subtitle fancy'><span>give your team the upper hand</span></h3>
                    <div className='LandingPage__puzzle-pieces'>
                        <img src={puzzlePieces} className='puzzle-pieces' alt='team holding puzzle pieces'/>
                        <p className='artist-attribution'>designed by <a href='https://www.rawpixel.com/image/424836/jigsaw-pieces-together-concept' target='_blank' rel="noopener noreferrer">rawpixel</a></p>
                    </div>
                    <ul className="benefits">
                        <li className='orange benefit'>
                            <img src={brain} className='icon' alt='knowledge icon'/>
                            Delve into your organizational knowledgebase to identify and fill knowledge gaps.
                        </li>
                        <li className='green benefit'>
                            <img src={leadership} className='icon' alt='leadership icon'/>
                            Organically create leadership opportunities for knowledgeable employees.
                        </li>
                        <li className='blue benefit'>
                            <img src={padlock} className='icon padlock' alt='security icon'/>
                            Store data in a secure online space accessible only to authorized users.
                            </li>
                    </ul>
                </section>
                <section className="LandingPage section-three">
                    <h2 className='title'>How it works + features</h2>
                    <h3 className='subtitle fancy'><span>knowledge sharing at its best</span></h3>
                    <div className='HowItWorks_row'>
                        <div className='LandingPage__img'>
                            <img src={communication} className='LandingPage__how-it-works' alt='network of web technology'/>
                            <p className='artist-attribution'>designed by <a href='https://www.rawpixel.com/image/401133/free-illustration-image-phone-illustration-answer'>rawpixel</a></p>
                        </div>
                        <div className='HowItWorks_content'>
                            <div className='HowItWorks subsection-one'>
                                <p>
                                    Register for an account knowing that your information is securely stored.
                                </p>
                            </div>
                            <div className='HowItWorks subsection-two'>
                                <p>
                                    Post questions to get help from your peers & tap into team knowledge.
                                </p>
                            </div>
                            <div className='HowItWorks subsection-three'>
                                <p>
                                    Answer questions to share what you know.
                                </p>
                            </div>
                            <div className='HowItWorks subsection-four'>
                                <p>
                                    Vote on questions and answers to reinforce information quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}