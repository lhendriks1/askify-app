import React, { useState, useEffect, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import questionApiService from '../../services/question-api-service';


export default function Votes(props) {
    const { item, itemType } = props
    const [votes, setVotes] = useState()

    useLayoutEffect(() => {
        setVotes(item.votes);
    }, [item.votes])

    useEffect(() => {
        if (itemType === 'question') {
                questionApiService.updateQuestionFields({
                    questionId: item.id, 
                    questionFields : { votes: votes }
                })
            } else if (itemType === 'answer') {
                questionApiService.updateAnswerFields({
                     answerId: item.id,
                     answerFields: { votes: votes }
                })
            }
        }, [votes, itemType])

    return (
        <div className="QuestionPage__votes-count">
            <button 
                onClick={() => setVotes(prevCount => prevCount + 1)}>
                <FontAwesomeIcon icon={faCaretUp} size="2x" />
            </button>
            {votes}
            <button 
                onClick={() => setVotes(prevCount => prevCount - 1)}>
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
            </button>
        </div>
    )
}


