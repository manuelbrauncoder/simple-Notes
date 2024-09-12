import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalAddNote(props) {

    const [noteTitle, setNoteTitle] = useState(''); // Variable, Funktion zum ändern. useState('') => default value
    const [noteContent, setNoteContent] = useState('');
    const [error, setError] = useState('');

    const clearInput = () => { // Funktionen werden als Variable mit arrow function angegeben
        setNoteTitle('');
        setNoteContent('');
        setError('');
    }

    const saveNote = (e) => {
        e.preventDefault();
        if (noteTitle.trim() && noteContent.trim()) {
            console.log('Title:', noteTitle);
            console.log('Content:', noteContent);
            props.onSave(noteTitle, noteContent);
            clearInput();
            props.onHide();
        } else {
            setError('Title and Content are required.')
        }
    }
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a Note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={saveNote}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>content</Form.Label>
                        <Form.Control type="text" placeholder="content" as="textarea" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} />
                    </Form.Group>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => { clearInput(); props.onHide(); }}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAddNote;