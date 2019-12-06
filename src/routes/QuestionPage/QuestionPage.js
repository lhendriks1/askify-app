import React, { useState, useContext, useEffect } from 'react';
import { QAContext } from '../../QaContext'
import Tags from '../../components/Tags/Tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './QuestionPage.css';

//TODO Why does this component seem to mount 2x??

export default function QuestionPage(props) {
    const {questionId} = props.match.params;
    const {results, setError} = useContext(QAContext)
    const question = results.filter(q => Number(q.id) === Number(questionId))[0]
    const answers = useAnswerItems(question.answers);
    
    useEffect(() => setError(""), [])

    //TODO: ADD error handling

    // function renderQuestion() {
    //     const {results}
    // }

    // if (error) {
    //     content = (error.error === "Question does not exist")
    //     ? <p className="error">Question not found</p>
    //     : <p className="error">There was an error</p>
    // } else if (!results.id) { //is it results.id???
    //     content = <div className="loading" />
    // } else {
    //     content = renderQuestion()
    // }
    // return (
    //     <Section className="QuestionPage">
    //         {content}
    //     </Section>
    // )

    return(
        <div className="QuestionPage">
            <button class="back" onClick={()=> props.history.push('/dashboard')}><FontAwesomeIcon icon={faChevronLeft} /> Back</button>
            <section className="question">
                <h1>{question.title}</h1>
                <p class="QuestionPage__question-details">{question.question}</p>
                <Tags tags={question.tags} {...props} />
                <div className='QuestionPage__author-date'>Asked by {question.author} on {new Date(question.date).toLocaleDateString()}</div>
            </section>
            <section className="ul-answers">
                <h2 class="answer-count">
                    {question.answers.length} {question.answers.length == 1 ? "Answer" : "Answers"}
                </h2>
                {answers}
            </section>
            <section class="answer-form">
                <hr />
                <form class="answer-form">
                    <label htmlFor="answer">Your Answer</label>
                    <textarea rows="4" id="answer" name="answer"></textarea>
                    <button className="answer">Post</button>
                </form>
            </section>

        </div>
    )
}

function useAnswerItems(answers=[]) {
     return (
        <ul className="QuestionPage__answer-list">
            {answers.map(ans => {
                const [votes, setVotes] = useState(Number(ans.votes))

                return (
                    <li class="QuestionPage__answer-item" key={ans.id}>
                        <hr />
                        <section className="answer-container">
                        <div className="QuestionPage__votes-count">
                            <span onClick={()=> setVotes(votes+1)}>
                                <FontAwesomeIcon icon={faCaretUp} size="2x" />
                            </span>
                            {votes}
                            <span onClick={() => setVotes(votes-1)}>
                                <FontAwesomeIcon icon={faCaretDown} size="2x" />
                            </span>
                        </div>
                        <div className="QuestionPage__answer">
                            <p className="QuestionPage__answer-text">
                                {ans.answer}
                            </p>
                            <div className="QuestionPage__answer-info">
                                - {ans.author} {(new Date(ans.date).toLocaleDateString())}
                            </div>
                        </div>
                        </section>
                    </li>
                )
            })}
        </ul>
    )
}
