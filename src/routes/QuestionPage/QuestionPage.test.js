import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import QuestionPage from './QuestionPage';

import {shallow} from 'enzyme';

describe('QuestionPage component', () => { 
    // Smoke test
    const match = { params: { questionId: 1 } }
    it('renders without crashing', () => {
           shallow(<QuestionPage match={match} />)
    }) 
})