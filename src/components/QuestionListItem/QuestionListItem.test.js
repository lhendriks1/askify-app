import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QuestionListContextProvider } from '../../contexts/QuestionListContext';
import QuestionListItem from './QuestionListItem';

import {shallow} from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

describe('QuestionListItem component', () => {
    it('renders without crashing', () => {
        const key = 1;
        const q = {
            id: 1,
            question_title: "First test question",
            question_body: "Question body",
            date_created: "2019-01-20T16:28:32.615Z",
            number_of_answers: 1,
            votes: 12,
            tags: "tag1,tag2",
            user: {
                user_id: 1,
                user_name: "test-user-1",
                full_name: "test user 1",
                date_created: "2019-06-22T16:28:32.615Z"
            },
        };

        const div =  document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
               <QuestionListContextProvider>
                    <QuestionListItem {...q} key={key}/>
                </QuestionListContextProvider>
            </BrowserRouter>, 
            div)
        ReactDOM.unmountComponentAtNode(div)
    })
})