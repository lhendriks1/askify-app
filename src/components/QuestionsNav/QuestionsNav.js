import React, {useContext} from 'react';
import {QAContext} from '../../QaContext';
import './QuestionsNav.css';
import QuestionMain from '../QuestionMain/QuestionListItem';

function QuestionsNav() {

  const qaContext = useContext(QAContext)
  const {QA} = qaContext;

    const questions = QA.map((q, key) => 
      <QuestionMain {...q} key={key}/>)

    return(
        <section className="section-QAList">
          {questions}
        </section>
    )
}

export default QuestionsNav;