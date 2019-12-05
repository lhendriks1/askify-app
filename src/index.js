import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider, QAContext} from './QaContext';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
