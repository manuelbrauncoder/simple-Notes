import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav(props) {
    return (
        <Navbar fixed='bottom' expand="lg" className="bg-body-tertiary">
            <Container className='nav-btns'>
                <Navbar.Brand className='content-btn' onClick={()=> props.changeContent('notes')} ><i className="bi bi-card-text"></i> {props.notesCounter}</Navbar.Brand>
                <Navbar.Brand className='content-btn' onClick={()=> props.changeContent('trash')} ><i className="bi bi-trash"></i> {props.trashCounter}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Nav;