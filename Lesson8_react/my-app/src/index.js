import React from 'react';
import ReactDom from 'react-dom';

import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history';

import App from './App';

import './index.css'
import './bootstrap.min.css';


const history = createBrowserHistory();

ReactDom.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);