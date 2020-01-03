import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuestionListContext } from '../../contexts/QuestionListContext';
import QuestionApiService from '../../services/question-api-service';
import AnswerForm from '../../components/AnswerForm/AnswerForm';
import Tags from '../../components/Tags/Tags';
import Votes from '../../components/Votes/Votes';
import './QuestionPage.css';

export default function QuestionPage(props) {
    const {questionId} = props.match.params;
    const { setError } = useContext(QuestionListContext)
    const [answers, setAnswers] = useState([])
    const answerItems = useAnswerItems(answers)
    const [question, setQuestion] = useState({
        id: '',
        question_title: '',
        date_created: '',
        number_of_answers: '',
        sum_of_votes: '',
        active_user_vote: '',
        tags: [],
        user: [],
    });

    function addNewAnswer(updatedAnswersList) {
        setAnswers(updatedAnswersList);
      }

    useEffect(() => {
        setError(null);
    }, []);
    
    useLayoutEffect(() => {
        const fetchQuestion = async () => {
            const currQuestion = await QuestionApiService.getQuestionById(questionId);
            setQuestion({...currQuestion, tags: currQuestion.tags.split(",")});
        }
        fetchQuestion();
    }, []);

    useEffect(() => {
        const fetchAnswers = async () => {
            const answers = await QuestionApiService.getQuestionAnswers(questionId);
            answers.sort((a, b) => b.sum_of_votes - a.sum_of_votes);
            setAnswers(answers);
        }
        fetchAnswers();
    }, []);

    return(
        <div className="QuestionPage">
            <Link to='/dashboard' className='back'>
                <i className="material-icons back-arrow">arrow_back_ios</i>
                Back
            </Link>
            <section className="QuestionPage__question-details">
                <Votes item={question} itemType={'question'}/>
                <div>
                    <h1 className='QuestionPage__question_title'>{question.question_title}</h1>
                    <p className="QuestionPage__question-details">{question.question_body}</p>
                    <Tags tags={question.tags} {...props} />
                    <div className='QuestionPage__author-date'>Asked by {question.user.user_name} on {new Date(question.date_created).toLocaleDateString()}</div>
                </div>
            </section>
            <section className="ul-answers">
                <h2 className="answer-count">
                    {answers.length} {answers.length === 1 ? "Answer" : "Answers"}
                </h2>
                {answerItems}
            </section>
            <AnswerForm questionId={question.id} answers={answers} addNewAnswer={addNewAnswer}/>
        </div>
    )
}

function useAnswerItems(answers) {
    return (
        <ul className="QuestionPage__answer-list">
            {answers.map(ans => 
                <li className="QuestionPage__answer-item" key={ans.id}>
                    <hr />
                    <section className="answer-container">
                        <Votes item={ans} itemType={'answer'}/>
                    <div className="QuestionPage__answer">
                        <p className="QuestionPage__answer-text">
                            {ans.answer}
                        </p>
                        <div className="QuestionPage__answer-info">
                            - {ans.user.user_name} {(new Date(ans.date_created).toLocaleDateString())}
                        </div>
                    </div>
                    </section>
                </li>
            )}
        </ul>
    )
}


