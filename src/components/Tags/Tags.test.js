import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './Tags';

describe('Tags component', () => {
    it('renders without crashing', () => {
        const div =  document.createElement('div');

        ReactDOM.render(
            <Tags tags={["tag2", "tag3"]}/>,
            div)
        ReactDOM.unmountComponentAtNode(div)
    })
})