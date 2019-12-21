import React from 'react'
import './NotFoundPage.css'
import astronaut from '../../resources/astronaut.jpg'

export default function NotFoundPage(props) {
    return (
        <div className='NotFoundPage__container'>
                <div className='NotFoundPage__div'>
                    <h1 className="NotFoundPage_404">404</h1>
                    <span className='NotFoundPage__subtext'>Sorry, this page is lost in space...</span>
                    <button className="NotFoundPage__home-btn" onClick={()=> props.history.push('/dashboard')}>Go Home</button>
                <img src={astronaut} className='NotFoundPage__astronaut' alt='astronaut lost in space' />
            </div>
            <a className='attribution' href="https://www.freepik.com/free-photos-vectors/people">People vector created by grmarc - www.freepik.com</a>
        </div>

    )
}