import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {QAContext} from '../../QaContext';
import SearchBox from '../SearchBox/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './headline.css';

function Headline() {
    const qaContext = useContext(QAContext)
    const { view, setView, filterBySelectedView, registrationMsg } = qaContext;

    const handleClick = e => {
        setView(e.target.id)
        filterBySelectedView()
    }

    useEffect(() => filterBySelectedView(), [view])

    const items = ["newest", "popular", "unanswered", "all"]
    const filterList =
        items.map((item, idx) => {
            return <li key={idx} className={`tab ${item === view ? "active" : ""}`} onClick={handleClick} id={item}>{item}</li>
        })

        const msgDiv = registrationMsg ? <div className="registration-msg"><FontAwesomeIcon icon={faUserCheck} /> {registrationMsg}</div> : '';

    return (
        <section className="headline">
            {msgDiv}
            <div>
                {/* <span className="q-count">145 Questions</span> */}
                <Link to="/new-question">
                    <button type="button" className="ask-question">Ask Question</button>
                </Link>
            </div>
        <SearchBox />
        <div className="tabs">
            <ul>
                {filterList}
            </ul>
        </div>
        </section>
    )
}

export default Headline;