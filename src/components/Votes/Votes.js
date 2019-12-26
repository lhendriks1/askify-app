
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import { VoteHistoryContext } from '../../contexts/VoteHistoryContext'
import questionApiService from '../../services/question-api-service';
import './Votes.css'

export default function Votes(props) {
    const { item, itemType } = props;
    const [votes, setVotes] = useState()
    const [voteUpdisabled, setVoteUpDisabled] = useState(true)
    const [voteDownDisabled, setVoteDownDisabled] = useState(true)

    useEffect(() => {
        console.log(item.userVote)
        if (item.userVote === 0) {
            setVoteDownDisabled(false)
            setVoteUpDisabled(false)
        }
        else if (item.userVote === 1) {
            setVoteDownDisabled(false)
            setVoteUpDisabled(true)
        }
        else if (item.userVote === -1) {
            setVoteDownDisabled(true)
            setVoteUpDisabled(false)
        }
    }, [item.userVote])

    useEffect(() => {
        setVotes(item.votes);
    }, [item.votes]);

    useEffect(() => {
        if (itemType === 'question' && !!votes) {
                questionApiService.updateQuestionFields({
                    questionId: item.id, 
                    questionFields : { votes: votes }
                });
            } else if (itemType === 'answer' && !!votes) {
                questionApiService.updateAnswerFields({
                     answerId: item.id,
                     answerFields: { votes: votes }
                });
            }
        }, [votes]);

    return (
        <div className="QuestionPage__votes-count">
            <button 
                disabled={voteUpdisabled}
                onClick={() => setVotes(prevCount => prevCount + 1)}>
                {/* <FontAwesomeIcon icon={faCaretUp} size="2x" /> */}
                <i className="material-icons md-48">arrow_drop_up</i>
            </button>
            {votes}
            <button 
                disabled={voteDownDisabled}
                onClick={() => setVotes(prevCount => prevCount - 1)}>
                {/* <FontAwesomeIcon icon={faCaretDown} size="2x" /> */}
                <i className="material-icons md-48">arrow_drop_down</i>

            </button>
        </div>
    )
}


