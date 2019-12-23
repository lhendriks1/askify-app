import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { QuestionListContext } from '../../contexts/QuestionListContext'
import SearchBox from '../SearchBox/SearchBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './headline.css'

export default function Headline() {
    const { registrationMsg } = useContext(QuestionListContext)
    const filterList = useFilterItems(["newest", "popular", "unanswered", "all"]);
    const msgDiv = registrationMsg 
        ? <div className="registration-msg"><FontAwesomeIcon icon={faUserCheck} /> {registrationMsg}</div> 
        : '';

    return (
        <section className="Headline">
            {msgDiv}
            <div>
                {/* <span className="q-count">145 Questions</span> */}
                <Link to="/new-question">
                    <button className="btn-ask-question">Ask Question</button>
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

function useFilterItems(items) {
    const { view, setView, filterBySelectedView } = useContext(QuestionListContext);
    useEffect(() => filterBySelectedView(), [view]);

    const handleClick = e => {
        setView(e.target.id)
        filterBySelectedView()
    }

    const filterList =
        items.map((item, idx) => {
            return <li key={idx}><button id={item} className={`tab ${item === view ? "active" : ""}`} onClick={handleClick}>{item}</button></li>
        });

    return filterList;
}
