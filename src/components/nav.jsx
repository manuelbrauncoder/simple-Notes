import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return (
        <Navbar fixed='bottom' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Nav;