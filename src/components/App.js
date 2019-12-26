import React, { useState, useEffect, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import { QuestionListContextProvider } from '../contexts/QuestionListContext'
import { VoteHistoryContextProvider } from '../contexts/VoteHistoryContext'
import { AuthContextProvider } from '../contexts/AuthContext'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'
import LandingPage from '../routes/LandingPage/LandingPage'
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../routes/LoginPage/LoginPage'
import Nav from './Nav/nav'
import QuestionsNavPage from '../routes/QuestionsNavPage/QuestionsNavPage'
import QuestionPage from '../routes/QuestionPage/QuestionPage'
import QuestionForm from '../routes/QuestionForm/QuestionForm'
import PrivateRoute from '../components/Utils/PrivateRoute'
import PublicOnlyRoute from '../components/Utils/PublicOnlyRoute'
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import './App.css'
//TODO: credit logo artist Image by <a href="https://pixabay.com/users/pholdrep-5575235/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3935655">Pedro Araújo</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3935655">Pixabay</a>

export default function App() {
  const [ignored, forceUpdate] = useReducer(x => x+1, 0);
  const [error, setError] = useState(null)
  const errorDiv = error ? <div className="error">{error}</div> : '';

  useEffect(() => {
    setError(null);
  }, []);

  useEffect(() => {
    IdleService.setIdleCallback(logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }

    return () => {
      IdleService.unRegisterIdleResets()
      TokenService.clearCallbackBeforeExpiry()
    }
  }, [])

  const logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    forceUpdate()
  }

  return (
    <AuthContextProvider>
      <QuestionListContextProvider>
        <div className="App">
            <header>
              <Nav/>
            </header>
            <main>
              {errorDiv}
              <Switch>
                <Route 
                  exact path={'/'} 
                  render={props => 
                    <ErrorBoundary {...props}>
                         <LandingPage {...props}/>
                    </ErrorBoundary> 
                  }
                />
                <Route 
                   path={'/register'} 
                   render={(props) => 
                      <ErrorBoundary>
                         <RegistrationPage {...props}/>
                      </ErrorBoundary>
                    } 
                />
                <PublicOnlyRoute 
                  path={'/login'} 
                  component={(props) => 
                      <ErrorBoundary> 
                         <LoginPage {...props}/> 
                      </ErrorBoundary> 
                  }
                />
                <PrivateRoute
                    path={'/dashboard'} 
                      component={props => 
                          <ErrorBoundary >
                            <QuestionsNavPage {...props}/>
                          </ErrorBoundary>
                      }
                  />
                <PrivateRoute 
                  path={'/question/:questionId'} 
                  component={props => 
                    <VoteHistoryContextProvider>
                      <ErrorBoundary>
                        <QuestionPage {...props} />
                      </ErrorBoundary>
                    </VoteHistoryContextProvider>
                  }
                />
                <PrivateRoute 
                  path={'/new-question'} 
                  component={props => 
                    <ErrorBoundary>
                      <QuestionForm {...props}/>
                    </ErrorBoundary>
                    }
                />
                <Route 
                  component={NotFoundPage}
                />
              </Switch>
            </main>
          </div>
        </QuestionListContextProvider>
      </AuthContextProvider>
  );
}