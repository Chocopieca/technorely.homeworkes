import React from 'react';

import {Container} from 'react-bootstrap';

import GitCards from './gitCards'

class NoRedux extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Container>
                    <GitCards />
                </Container>
            </div>
        );
    }
}

export default NoRedux;