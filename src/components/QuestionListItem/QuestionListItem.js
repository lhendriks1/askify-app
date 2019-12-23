import React from 'react'
import { Link } from 'react-router-dom'
import Tags from '../Tags/Tags'
import './QuestionListItem.css'

export default function QuestionListItem(props) {
    const { id, question_title, user, date_created, question_body, number_of_answers, tags, votes} = props

    const ans = (number_of_answers === 1) ? "answer" : "answers"
    const vote = (votes === 1) ? "vote" : "votes"

    return (
        <section className="qa-item">
            <div className="stats">
                <div className="answers">{number_of_answers} {ans}</div>
                <div className="votes">{votes} {vote}</div>
            </div>
            <div className="question">
                <Link to={`/question/${id}`} className='title'>
                    <span className="title">{question_title}</span>
                </Link>
                    <p className="question-details">{question_body}</p>
            </div>
            <Tags tags={tags.split(",")} />
            <div className="QuestionListItem__author-date">Asked {(new Date(date_created).toLocaleDateString())} by {user.user_name}.</div>
            <hr/>
        </section>
    )
}