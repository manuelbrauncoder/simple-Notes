import React, { useEffect, useState } from 'react';
import Nav from './nav';
import Header from './header';
import NoteCard from './note-card';
import Button from 'react-bootstrap/Button';
import ModalAddNote from './modal-add-note';

function App() {
    const [modalShow, setModalShow] = React.useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        console.log('Notes updated:', notes);
    }, [notes]); // useEffect wird ausgeführt sobald sich bei notes etwas ändert

    const addNote = (title, content) => {
        const newNote = { title, content };
        setNotes([...notes, newNote]); // aktualisiert notes mit allen alten notes, plus newNote (spread Operator!)
    }
    return (
        <React.Fragment>
            <Header />
            <div className="notes">
                {notes.map((note, index) => ( // den index immer als key übergeben!!
                    <NoteCard
                    key={index}
                    title={note.title}
                    content={note.content}
                />
                ))}
                
            </div>
            <>
                <Button className='add-note-btn' variant="primary" onClick={() => setModalShow(true)}>
                    Add
                </Button>

                <ModalAddNote
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onSave={addNote}
                />
            </>
            
            <Nav />
        </React.Fragment>
    );
}

export default App;