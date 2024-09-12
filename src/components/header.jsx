import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return ( 
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Header</Navbar.Brand>
            </Container>
        </Navbar>
     );
}

export default Header;