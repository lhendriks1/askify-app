import React, {useEffect, useContext} from 'react';
import {QAContext} from '../QaContext';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../routes/LandingPage/LandingPage';
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage';
import LoginPage from '../routes/LoginPage/LoginPage';
import QuestionPage from '../routes/QuestionPage/QuestionPage';
import QuestionForm from '../routes/QuestionForm/QuestionForm';

import Nav from './Nav/nav'
import QuestionsNavPage from '../routes/QuestionsNavPage/QuestionsNavPage'
import './App.css'

function App() {

  useEffect(() => console.log('mounted or updated'));
  const {error} = useContext(QAContext)
  const errorDiv = error ? <div className="error">{error}</div> : '';

  //TODO: Add route for 404
  return (
    <div className="App">
        {errorDiv}
        <header>
          <Nav/>
        </header>
        <main>
          <Switch>
            <Route exact path={'/'} render={(props) => <LandingPage {...props}/>} />
            <Route path={'/register'} render={(props) => <RegistrationPage {...props}/>} />
            <Route path={'/login'} render={(props) => <LoginPage {...props}/>} />
            <Route path={'/dashboard'} component={QuestionsNavPage}/>
            <Route path={'/question/:questionId'} render={(props) => <QuestionPage {...props}/>} />
            <Route path={'/new-question'} render={(props) => <QuestionForm {...props}/>} />
          </Switch>
        </main>
      </div>
  );
}

export default App;
