import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
    return(
        <footer>
        <p>Created by Lydia Hendriks</p>
        <ul className="contact">
            <li><a href='https://www.linkedin.com/in/lydiahendriks/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="lg"/></a></li>
            <li><a href='https://github.com/lhendriks1' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg"/></a></li>
            <li><a href='https://lhendriks1.github.io/portfolio/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLaptopCode} size="lg" ></FontAwesomeIcon></a></li>
        </ul>
        <p className='artist-attribution'>Askify logo designed by <a href="https://pixabay.com/users/pholdrep-5575235/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3935655">Pedro Araújo</a></p>
    </footer>
    )
}