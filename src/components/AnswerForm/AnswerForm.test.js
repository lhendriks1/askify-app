import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AnswerForm from './AnswerForm';

describe('RegistrationPage component', () => { 
    // Smoke test
    it('renders without crashing', () => {
       const div =  document.createElement('div');
       ReactDOM.render(
           <BrowserRouter>
               <AnswerForm />
           </BrowserRouter>, 
           div)
       ReactDOM.unmountComponentAtNode(div)
    })  
})