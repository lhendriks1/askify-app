import React, { useContext } from 'react'
import { QuestionListContext } from '../../contexts/QuestionListContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBox.css'

export default function SearchBox() {
    const value = useContext(QuestionListContext);
    const { query, setQuery, filterBySearchTerm } = value;

    const handleChange = e => {
        setQuery(e.target.value)
        filterBySearchTerm(e.target.value)
    }

    return(
        <div className='search-bar'>
            <div className='search-icon'><FontAwesomeIcon icon={faSearch}/></div>
            <form
                onSubmit={e => { e.preventDefault(); }}
            >
                <label htmlFor='search-term'></label>
                <input 
                    id='search-term'
                    onChange={handleChange}
                    placeholder='Search term'
                    value={query}
                    type='text' 
                    name='search-term'
                />
            </form>
        </div>
    )
}