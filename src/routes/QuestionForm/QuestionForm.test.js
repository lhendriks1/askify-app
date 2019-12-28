import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import QuestionForm from './QuestionForm';
import renderer from 'react-test-renderer';

describe('QuestionForm component', () => { 
    // Smoke test
    it('renders without crashing', () => {
       const div =  document.createElement('div');
       ReactDOM.render(
           <BrowserRouter>
               <QuestionForm />
           </BrowserRouter>, 
           div)
       ReactDOM.unmountComponentAtNode(div)
    })  
});