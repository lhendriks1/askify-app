import React, { useState, useContext, useEffect } from 'react'
import { QuestionListContext } from '../../contexts/QuestionListContext'
import QuestionApiService from '../../services/question-api-service'
import AnswerForm from '../../components/AnswerForm'
import Tags from '../../components/Tags/Tags'
import Votes from '../../components/Votes/Votes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './QuestionPage.css'

//TODO Why does this component seem to mount 2x??

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
        votes: '',
        tags: [],
        user: []
    })

    function addNewAnswer(updatedAnswersList) {
        setAnswers(updatedAnswersList);
      }

    useEffect(() => {
        setError(null)
    }, [])


    useEffect(() => {
        const fetchQuestion = async () => {
            const currQuestion = await QuestionApiService.getQuestionById(questionId);
            setQuestion({...currQuestion, tags: currQuestion.tags.split(",")})
        }
        fetchQuestion()
    }, [])

    useEffect(() => {
        const fetchAnswers = async () => {
            const answers = await QuestionApiService.getQuestionAnswers(questionId)
            setAnswers(answers)
        }
        fetchAnswers()
    }, [])

    //TODO: ADD error handling
    return(
        <div className="QuestionPage">
            <button className="back" onClick={()=> props.history.push('/dashboard')}><FontAwesomeIcon icon={faChevronLeft} /> Back</button>
            <section className="QuestionPage__question-details">
                <Votes item={question} voteCount={question.votes} itemType={'question'}/>
                <div>
                    <h1>{question.question_title}</h1>
                    <p className="QuestionPage__question-details">{question.question_body}</p>
                    <Tags tags={question.tags} {...props} />
                    <div className='QuestionPage__author-date'>Asked by {question.user.user_name} on {new Date(question.date_created).toLocaleDateString()}</div>
                </div>
            </section>
            <section className="ul-answers">
                <h2 className="answer-count">
                    {answers.length} {answers.length == 1 ? "Answer" : "Answers"}
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


