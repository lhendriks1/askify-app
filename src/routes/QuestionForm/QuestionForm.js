import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './QuestionForm.css';

export default function QuestionForm(props){


    return(
        <section className="question-form">
            <button className="back" onClick={()=> props.history.push('/dashboard')}><FontAwesomeIcon icon={faChevronLeft} /> Back</button>

            <form>
                <h1>Ask a new Question</h1>
                <fieldset>
                    <label htmlFor="question-title">Title (required)</label>
                    <input type="text" id="question-title" name="question-title" aria-label="title for question" aria-required="true"></input>
                    <label htmlFor="question-tags">Tags (optional)</label>
                    <div id="tagConstraint">Add up to 5 tags (separated by comma)</div>
                    <input type="text" id="question-tags" name="question-tags" aria-label="tags for question" aria-required="false" aria-describedby="tagConstraint"></input>
                    <label htmlFor="question-body">Body (optional)</label>
                    <textarea id="question-body" rows="8" name="question-body" aria-required="false" aria-label="body for question"></textarea>
    
                    <button type="submit" className="post-question">Post</button>
                </fieldset>
            </form>
        </section>
    )
}