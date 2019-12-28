import React, {useState, useContext} from 'react';
import {QuestionListContext} from '../../contexts/QuestionListContext';
import QuestionApiService from '../../services/question-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './QuestionForm.css';

export default function QuestionForm(props){
    const { results, addNewQuestion } = useContext(QuestionListContext);
    const [error, setError] = useState(null);
    const errorDiv = error ? <div className="error">{error}</div> : '';

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);
        const { question_title, question_body, tags } = e.target
        const tagsFormatted = tags.value.split(", ").map(tag => tag.trim())
        const questionResponse = await QuestionApiService.postQuestion({
            title: question_title.value, 
            body: question_body.value,
            tags: [tagsFormatted]
        });
        question_title.value = '';
        question_body.value='';
        tags.value=[];
        props.history.push(`/question/${questionResponse.id}`);
        addNewQuestion([...results, questionResponse]);

    }




    return(
        <section className="question-form">
            <button className="back" onClick={()=> props.history.push('/dashboard')}><FontAwesomeIcon icon={faChevronLeft} /> Back</button>
            <form
                onSubmit={handleSubmit}
            >
                <h1>Ask a new Question</h1>
                {errorDiv}
                <fieldset>
                    <label htmlFor="question_title">Title (required)</label>
                    <input type="text" id="question_title" name="question_title" aria-label="title for question" aria-required="true"></input>
                    <label htmlFor="tags">Tags (optional)</label>
                    <div id="tagConstraint">Add up to 5 tags separated by a comma, e.g.: Salesforce, IT, Cases</div>
                    <input type="text" id="tags" name="tags" aria-label="tags for question" aria-required="false" aria-describedby="tagConstraint"></input>
                    <label htmlFor="question_body">Body (required)</label>
                    <textarea id="question_body" rows="8" name="question_body" aria-required="true" aria-label="body for question"></textarea>
    
                    <button type="submit" className="post-question">Post</button>
                </fieldset>
            </form>
        </section>
    );
}