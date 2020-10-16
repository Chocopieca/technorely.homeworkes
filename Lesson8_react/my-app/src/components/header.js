import React from 'react';
import {
    Container,
    Navbar,
    Nav
} from 'react-bootstrap';

class Header extends React.Component{
    render() {
        return (
            <header>
                <Container />
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/redux">GetHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                        <Nav.Link href="/redux">Redux</Nav.Link>
                        <Nav.Link href="/noredux">NoRedux</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header