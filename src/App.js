import React, {useEffect, useContext} from 'react';
import {Provider, QAContext} from './QaContext';
import Nav from './components/Nav/nav'
import Headline from './components/Headline/headline'
import QuestionsNav from './components/QuestionsNav/QuestionsNav'
import './App.css'

function App() {

  useEffect(() => console.log('mounted or updated'));
  const {error} = useContext(QAContext)
  const errorDiv = error ? <div className="error">{error}</div> : '';

  return (
    <Provider>
        {errorDiv}
        <Nav/>
        <Headline/>
        <QuestionsNav/>
    </Provider>
  );
}

export default App;
