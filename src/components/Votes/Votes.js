import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default function Votes({answer}) {
    console.log(answer)
    const [votes, setVotes] = useState(Number(answer.votes))
    console.log(votes)

    return (
        <div className="QuestionPage__votes-count">
            <span onClick={()=> setVotes(votes+1)}>
                <FontAwesomeIcon icon={faCaretUp} size="2x" />
            </span>
            {votes}
            <span onClick={() => setVotes(votes-1)}>
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
            </span>
        </div>
    )
}