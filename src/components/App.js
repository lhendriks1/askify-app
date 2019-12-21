import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { QuestionListContextProvider } from '../contexts/QuestionListContext'
import { AuthContextProvider } from '../contexts/AuthContext'
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


function App() {
  const [error, setError] = useState(null)
  const errorDiv = error ? <div className="error">{error}</div> : '';

  useEffect(() => {
    setError(null)
  }, []);

  //TODO: Add route for 404
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
                    <ErrorBoundary>
                       <QuestionPage {...props} />
                    </ErrorBoundary>
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

export default App;
