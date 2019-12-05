import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import renderer from 'react-test-renderer';

describe('App component', () => { 
    // Smoke test
    it('renders without crashing', () => {
       const div =  document.createElement('div');
       ReactDOM.render(
           <BrowserRouter>
               <App />
           </BrowserRouter>, 
           div)
       ReactDOM.unmountComponentAtNode(div)
    })  
})