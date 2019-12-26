import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { QuestionListContext } from '../../contexts/QuestionListContext'
import SearchBox from '../SearchBox/SearchBox'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './headline.css'
import Button from '@material-ui/core/Button';

import CustomizedSnackBars from '../../components/SnackBar'

export default function Headline() {
    const { registrationMsg } = useContext(AuthContext)
    const filterList = useFilterItems(["newest", "popular", "unanswered", "all"]);

    return (
        <section className="Headline">
            {registrationMsg 
                ?  <CustomizedSnackBars message={registrationMsg} type={'success'}/>
                : null
            }
            <div>
                {/* //<span className="q-count">145 Questions</span> */}
                <Link to="/new-question">
                    <Button variant='contained' color='primary'>Ask Question</Button>
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
        setView(e.target.id);
        filterBySelectedView();
    };

    const filterList =
        items.map((item, idx) => {
            return <li key={idx}><button id={item} className={`tab ${item === view ? "active" : ""}`} onClick={handleClick}>{item}</button></li>
        });

    return filterList;
}