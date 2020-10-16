import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import {Router} from "react-router-dom"
import {createBrowserHistory} from 'history'

import { store } from './store/configStore'
import App from './containers/App'

import './styles/index.css'
import './styles/bootstrap.min.css'


const history = createBrowserHistory()

ReactDom.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);