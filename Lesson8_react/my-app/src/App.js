import React, {useState} from 'react';

import './index.css';

import Header from './components/header'
import Router from './router.js'

class App extends React.Component {

    render() {
        const { history } = this.props

        return (
            <div className="app">
                <Header />
                <Router />
            </div>
        );
    }
}

export default App;