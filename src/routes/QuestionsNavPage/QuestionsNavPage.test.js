import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QuestionListContextProvider } from '../../contexts/QuestionListContext';
import QuestionsNavPage from './QuestionsNavPage';

describe('QuestionNavPage component', () => {
    it('renders without crashing', () => {
        const div =  document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
               <QuestionListContextProvider>
                    <QuestionsNavPage />
                </QuestionListContextProvider>
            </BrowserRouter>, 
            div)
        ReactDOM.unmountComponentAtNode(div)
    })
})