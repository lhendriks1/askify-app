import React, { useState, useEffect } from 'react';
import questionVoteApiService from '../../services/question_vote-api-service';
import answerVoteApiService from '../../services/answer_vote-api-service';


import './Votes.css'

export default function Votes(props) {
    const { item, itemType } = props;
    const [votes, setVotes] = useState()
    const [activeUserVote, setActiveUserVote] = useState()
    const [voteUpDisabled, setVoteUpDisabled] = useState(true)
    const [voteDownDisabled, setVoteDownDisabled] = useState(true)

    useEffect(() => {
        if (activeUserVote === 0) {
            setVoteDownDisabled(false)
            setVoteUpDisabled(false)
        }
        else if (activeUserVote === 1) {
            setVoteDownDisabled(false)
            setVoteUpDisabled(true)
        }
        else if (activeUserVote === -1) {
            setVoteDownDisabled(true)
            setVoteUpDisabled(false)
        }
    }, [activeUserVote])

    useEffect(() => {
        setVotes(item.sum_of_votes);
        setActiveUserVote(item.active_user_vote);
    }, [item.sum_of_votes, item.active_user_vote]);

    const handleUpVote = () => {
        setVotes(prevCount => prevCount + 1);
        setActiveUserVote(prevVote => prevVote + 1);

        if (itemType === 'question') {
            questionVoteApiService.patchVote({
                questionId: item.id, 
                vote: activeUserVote + 1,
            });
        } else if (itemType === 'answer') {
            answerVoteApiService.patchVote({
                 answerId: item.id,
                 vote: item.active_user_vote + 1
            });
        }
    }

    const handleDownVote = () => {
        setVotes(prevCount => prevCount - 1);
        setActiveUserVote(prevVote => prevVote - 1);

        if (itemType === 'question' && !!votes) {
            questionVoteApiService.patchVote({
                questionId: item.id,
                vote: activeUserVote - 1
            })
        } else if (itemType === 'answer' && !!votes) {
            answerVoteApiService.patchVote({
                answerId: item.id,
                vote: item.active_user_vote - 1
            })
        }
    }

    return (
        <div className="QuestionPage__votes-count">
            <button 
                disabled={voteUpDisabled}
                onClick={handleUpVote}>
                <i className="material-icons md-48">arrow_drop_up</i>
            </button>
            {votes}
            <button 
                disabled={voteDownDisabled}
                onClick={handleDownVote}>
                <i className="material-icons md-48">arrow_drop_down</i>

            </button>
        </div>
    )
}


