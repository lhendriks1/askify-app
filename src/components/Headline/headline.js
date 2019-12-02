import React, {useContext, useState} from 'react';
import {QAContext} from '../../QaContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import './headline.css';

function Headline() {
    const qaContext = useContext(QAContext)
    const {updateView} = qaContext;
    const [view, setView] = useState("all")

    const handleClick = e => {
        updateView(e.target.id)
        setView(e.target.id)
    }

    const items = ["all", "unanswered", "popular", "newest"]
    const filterList =
        items.map((item, idx) => {
            return <li key={idx} className={`tab ${item === view ? "active" : ""}`} onClick={handleClick} id={item}>{item}</li>
        })

    return (
        <section className="headline">
            <div>
                {/* <span className="q-count">145 Questions</span> */}
                <button type="button" className="ask-question"><FontAwesomeIcon icon={faPlus}/> Ask a question</button>
            </div>
            <div className="search-bar">
                <div className="search-icon"><FontAwesomeIcon icon={faSearch}/></div>
                <form
                    onSubmit=""
                >
                    <label id="search-term"></label>
                    <input 
                        onChange=""
                        placeholder="Search term" 
                        value=""
                        type="text" 
                        name="search-term" 
                        id="search-term"
                        value=""/>
                </form>
                <div className="tabs">
                    <ul>
                        {filterList}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Headline;