import React, {useEffect} from 'react';
import {Provider} from './QaContext';
import Nav from './components/Nav/nav'
import Headline from './components/Headline/headline'
import QuestionsNav from './components/QuestionsNav/QuestionsNav'
import './App.css'

function App() {

  useEffect(() => console.log('mounted or updated'));
  //figure out why empty array. Need to update state with data value 

  return (
    <Provider>
        <Nav/>
        <Headline/>
        <QuestionsNav/>
    </Provider>
  );
}

export default App;
