import React, { useState } from 'react';
import QuestionApiService from '../../services/question-api-service';
import { Textarea } from '../../components/Utils/Utils';
import { Button } from '@material-ui/core';

export default function AnswerForm(props) {
    const [error, setError] = useState(null);
    const errorDiv = error ? <div className="error">{error}</div> : '';

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);
        const { newAnswer } = e.target;
        if (newAnswer.value.length === 0) {
            setError('Answer must not be blank')
            return;
        }
        const answerResponse = await QuestionApiService.postAnswer({
            question_id: props.questionId, 
            answer: newAnswer.value
        });
        newAnswer.value = '';
        props.addNewAnswer([...props.answers, answerResponse]);

    }


    return (
        <section className="answer-form">
            <hr />
            <form 
                onSubmit={handleSubmit}
                className="answer-form">
                {errorDiv}
                <label htmlFor="newAnswer">Your Answer</label>
                <Textarea rows="4" id="newAnswer" name="newAnswer"></Textarea>
                <Button type="submit" variant='contained' color='primary'>Post</Button>
            </form>
        </section>
    )
}