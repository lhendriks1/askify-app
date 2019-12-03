import React, {useContext, useEffect} from 'react';
import {QAContext} from '../../QaContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBox.css';

export default function SearchBox() {
    const qaContext = useContext(QAContext);
    const { query, setQuery, filterBySearchTerm } = qaContext;

    const handleChange = e => {
        setQuery(e.target.value)
        filterBySearchTerm(e.target.value)
    }

    return(
        <div className="search-bar">
            <div className="search-icon"><FontAwesomeIcon icon={faSearch}/></div>
            <form
            >
                <label id="search-term"></label>
                <input 
                    onChange={handleChange}
                    placeholder="Search term" 
                    value={query}
                    type="text" 
                    name="search-term" 
                    id="search-term"
                />
            </form>
        </div>
    )
}