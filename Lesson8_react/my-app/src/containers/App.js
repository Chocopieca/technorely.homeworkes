import React from 'react'

import Header from '../components/header'
import Router from '../logic/router.js'

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header />
                <Router/>
            </div>
        );
    }
}

export default App