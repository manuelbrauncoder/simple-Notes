import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Header(props) {
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">simpleNotes</Navbar.Brand>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                value={props.value}
                                onChange={(e) => props.setSearchTerm(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;