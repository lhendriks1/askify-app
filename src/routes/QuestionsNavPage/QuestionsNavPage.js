import React, { useState, useContext, useEffect } from 'react'
import { QuestionListContext } from '../../contexts/QuestionListContext'
import QuestionApiService from '../../services/question-api-service'
import QuestionListItem from '../../components/QuestionListItem/QuestionListItem'
import Headline from '../../components/Headline/headline'
import './QuestionsNavPage.css'

function QuestionsNavPage() {
  const value = useContext(QuestionListContext)
  const {displayedResults, setQuery, setDisplayedResults, results, setResults, setSearchResults} = value;
  const [error, setError] = useState(null);
  const errorDiv = error ? <div className="error">{error}</div> : '';

  useEffect(() => {
    setQuery('')

    QuestionApiService.getQuestions()
      .then(results => {
        setResults(results)
        setSearchResults(results)
        setDisplayedResults(results)
      })
      .catch(error => setError(error))
    }, [])

    const questions = displayedResults.map((q, key) => 
      <QuestionListItem {...q} key={key}/>)

    return(
      <>
        <Headline />
        {errorDiv}
          <section className="section-QAList">
            {!displayedResults.length && <p>0 questions</p>}
            {questions}
          </section>
      </>
    )
}

export default QuestionsNavPage;