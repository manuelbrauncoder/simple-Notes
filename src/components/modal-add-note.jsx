import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalAddNote(props) {

    const [noteTitle, setNoteTitle] = useState(''); // Variable, Funktion zum ändern. useState('') => default value
    const [noteContent, setNoteContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (props.noteToEdit !== null) {
            setNoteTitle(props.noteToEdit.title);
            setNoteContent(props.noteToEdit.content);
        }
    }, [props.noteToEdit])

    const clearInput = () => { // Funktionen werden als Variable mit arrow function angegeben
        setNoteTitle('');
        setNoteContent('');
        setError('');
    }

    const saveNote = (e) => {
        e.preventDefault();
        if (noteTitle.trim() && noteContent.trim()) {
            if (props.indexToEdit !== null) {
                props.onEdit(noteTitle, noteContent, props.indexToEdit)
                clearInput();
                props.onHide();
            } else {
                props.onSave(noteTitle, noteContent); // speichert die note mit der funktion aus der parent component
                clearInput();
                props.onHide(); // schließt das modal mit der fn aus der parent
            }

        } else {
            setError('Title and Content are required.')
        }
    }
    return (
        <Modal
            show={props.show}
            onHide={() => {
                console.log('close');
                clearInput();
                props.clearEditCache();  // Leert den Cache
                props.onHide();   // Schließt das Modal
              }}
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
                <Button onClick={() => { clearInput(); props.onHide(); props.clearEditCache(); }}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAddNote;