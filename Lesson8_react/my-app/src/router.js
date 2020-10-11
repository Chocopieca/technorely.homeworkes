import React from 'react';

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';

import './index.css';

import Redux from './components/learnRedux';
import NoRedux from './components/lernNoRedux';

class Router extends React.Component {
    render() {
        const { history } = this.props

        return (
            <div className='route'>
                <Switch>
                    <Route history={history} path='/redux' component={Redux} />
                    <Route history={history} path='/noredux' component={NoRedux} />
                    <Redirect from='/' to='/redux' />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Router)