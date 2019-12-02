import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import './QuestionListItem.css';

function QuestionListItem(props) {
    const {title, author, date, question, answers, votes, tags} = props
    
// Count total answers for each question    
    const answerCount = answers.length

// Count total votes for each question
    let voteCount = 0
    answers.forEach(ans => voteCount += Number(ans.votes))


    const tagItems = tags.map((item, key) => 
        <li className="tags" key={key}>{item}</li>)

//update plurality of nouns
    const ans = (answerCount == 1) ? "answer" : "answers"
    const vote = (voteCount == 1) ? "vote" : "votes"
 


    return (
        <section className="qa-item">
            <div className="stats">
                <div className="answers">{answerCount} {ans}</div>
                <div className="votes">{voteCount} {vote}</div>
            </div>
            <div className="question">
                <span className="title">{title}</span>
                <span className="question-details">{question}</span>
            </div>
            <div className="div-tags">
                <FontAwesomeIcon icon={faTags}/>
                <ul className="tags">
                    {tagItems}
                </ul>
            </div>
            <hr/>
        </section>
    )
}

export default QuestionListItem;