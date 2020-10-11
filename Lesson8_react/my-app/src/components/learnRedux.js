import React from 'react';

import {
    Container,
    Col,
} from 'react-bootstrap';

import Reqaset from './reqaset'

class Redux extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Reqaset />
            </div>
        );
    }
}

export default Redux;