import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {QuestionListContext} from '../../contexts/QuestionListContext';
import QuestionApiService from '../../services/question-api-service';
import { Input, Textarea } from '../../components/Utils/Utils';
import { Button } from '@material-ui/core';
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
            <Link to='/dashboard' className='back'>
                <i class="material-icons back-arrow">arrow_back_ios</i>
                Back
            </Link>
            <form
                onSubmit={handleSubmit}
            >
                <h1>Ask a new Question</h1>
                {errorDiv}
                <fieldset>
                    <label htmlFor="question_title">Title (required)</label>
                    <Input type="text" id="question_title" name="question_title" aria-label="title for question" aria-required="true"></Input>
                    <label htmlFor="question_body">Body (required)</label>
                    <Textarea id="question_body" rows="8" name="question_body" aria-required="true" aria-label="body for question"></Textarea>
                    <label htmlFor="tags">Tags (optional)</label>
                    <div id="tagConstraint">Add up to 5 tags separated by a comma, e.g.: Salesforce, IT, Cases</div>
                    <Input type="text" id="tags" name="tags" aria-label="tags for question" aria-required="false" aria-describedby="tagConstraint"></Input>
                    <Button type='submit' variant='contained' color='primary'>
                        Post
                    </Button>
                </fieldset>
            </form>
        </section>
    );
}