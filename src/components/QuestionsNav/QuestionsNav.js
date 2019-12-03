import React, {useContext} from 'react';
import {QAContext} from '../../QaContext';
import './QuestionsNav.css';
import QuestionListItem from '../QuestionListItem/QuestionListItem';

function QuestionsNav() {

  const qaContext = useContext(QAContext)
  const {displayedResults} = qaContext;

    const questions = displayedResults.map((q, key) => 
      <QuestionListItem {...q} key={key}/>)

    return(
        <section className="section-QAList">
          {!displayedResults.length && <p>0 unaswered questions</p>}
          {questions}
        </section>
    )
}

export default QuestionsNav;