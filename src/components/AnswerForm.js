import React, { useState } from 'react';
import QuestionApiService from '../services/question-api-service';


export default function AnswerForm(props) {
    const [error, setError] = useState(null);
    const errorDiv = error ? <div className="error">{error}</div> : '';

    const handleSubmit = async e => {
        e.preventDefault()
        setError(null)
        const { newAnswer } = e.target
        const answerResponse = await QuestionApiService.postAnswer({
            question_id: props.questionId, 
            answer: newAnswer.value
        })
        newAnswer.value = ''
        props.addNewAnswer([...props.answers, answerResponse])

    }


    return (
        <section className="answer-form">
            <hr />
            <form 
                onSubmit={handleSubmit}
                className="answer-form">
                {errorDiv}
                <label htmlFor="newAnswer">Your Answer</label>
                <textarea rows="4" id="newAnswer" name="newAnswer"></textarea>
                <button type="submit" className="answer">Post</button>
            </form>
        </section>
    )
}