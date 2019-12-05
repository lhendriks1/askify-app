import React, {useContext, useEffect} from 'react';
import {QAContext} from '../../QaContext';
import './QuestionsNavPage.css';
import QuestionListItem from '../../components/QuestionListItem/QuestionListItem';
import Headline from '../../components/Headline/headline';

function QuestionsNavPage() {
  const qaContext = useContext(QAContext)
  const {displayedResults, setQuery, setDisplayedResults, results} = qaContext;

  useEffect(() => {
    setQuery('');
    setDisplayedResults(results)
  }, [])

    const questions = displayedResults.map((q, key) => 
      <QuestionListItem {...q} key={key}/>)

    return(
      <>
        <Headline />
        <section className="section-QAList">
          {!displayedResults.length && <p>0 unaswered questions</p>}
          {questions}
        </section>
      </>
    )
}

export default QuestionsNavPage;