import React from 'react';
import ReactDOM from 'react-dom';
import Votes from './Votes';

describe('LoginForm component', () => {
    it('renders without crashing', () => {
        const item = {
            answer: "First test answer",
            date_created: "2019-12-22T19:21:54.533Z",
            id: 15,
            votes: 2,
            user: {
                date_created: "2019-12-22T19:07:33.540325+00:00",
                full_name: "test user",
                user_id: 5,
                user_name: "test user"
            },
        };
        
        const div =  document.createElement('div');

        ReactDOM.render(
            <Votes itemType={"answer"} item={item} />,
            div)
        ReactDOM.unmountComponentAtNode(div)
    })
})