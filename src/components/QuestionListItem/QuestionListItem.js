import React from 'react';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
import './QuestionListItem.css';

export default function QuestionListItem(props) {
    const { id, title, author, date, question, answers, tags} = props
    
    const answerCount = answers.length
    const ans = (answerCount == 1) ? "answer" : "answers"

    // Count total votes for each question
    let voteCount = 0
    const vote = (voteCount == 1) ? "vote" : "votes"  
    answers.forEach(ans => voteCount += Number(ans.votes))
    
    return (
        <section className="qa-item">
            <div className="stats">
                <div className="answers">{answerCount} {ans}</div>
                <div className="votes">{voteCount} {vote}</div>
            </div>
            <div className="question">
                <Link to={`/question/${id}`} className='title'>
                    <span className="title">{title}</span>
                </Link>
                    <p className="question-details">{question}</p>
            </div>
            <Tags tags={tags} />
            <div className="QuestionListItem__author-date">Asked {(new Date(date).toLocaleDateString())} by {author}.</div>
            <hr/>
        </section>
    )
}