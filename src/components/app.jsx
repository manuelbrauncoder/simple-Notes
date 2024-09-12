import React, { useEffect, useState } from 'react';
import Nav from './nav';
import Header from './header';
import NoteCard from './note-card';
import Button from 'react-bootstrap/Button';
import ModalAddNote from './modal-add-note';

function App() {
    const [modalShow, setModalShow] = React.useState(false);
    const [notes, setNotes] = useState([]);
    const [trashNotes, setTrashNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [content, setContent] = useState('notes');
    const [isInitialized, setIsInitialized] = useState(false);
    const [isTrashNote, setIsTrashNote] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        const storedTrash = localStorage.getItem('trash');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
        if (storedTrash) {
            setTrashNotes(JSON.parse(storedTrash));
        }
        setIsInitialized(true);

    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('notes', JSON.stringify(notes));
            localStorage.setItem('trash', JSON.stringify(trashNotes));
        }
    }, [notes, trashNotes, isInitialized]);

    const searchNotes = (searchTerm) => {
        return notes.filter(note =>
            note.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.trim().toLowerCase())
        );
    };

    const moveToTrash = (note, index) => {
        setTrashNotes([...trashNotes, note]); // alte notes plus neue note
        const notesCopy = [...notes]; // Kopie erstellen
        notesCopy.splice(index, 1); // note mit index aus kopie arry entfernen
        setNotes([...notesCopy]);   // mit setNotes das array aktualisieren
    }

    const addNote = (title, content) => {
        const newNote = { title, content };
        setNotes([...notes, newNote]); // aktualisiert notes mit allen alten notes, plus newNote (spread Operator!)
    }

    const editNote = (note, index) => {
        setSelectedNote(note);
        setSelectedIndex(index);
        setModalShow(true);
    }

    const clearEditCache = () => {
        setSelectedNote(null);
        setSelectedIndex(null);

    }

    const updateNote = (title, content, index) => {
        const newNote = { title, content };
        const notesCopy = [...notes];
        notesCopy.splice(index, 1, newNote);
        setNotes([...notesCopy]);
    }

    const changeContent = (content) => {
        setContent(content);
    }

    return (
        <React.Fragment>
            <Header
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            {content === 'notes' ? <div className="notes"><h2>Notes</h2>
                <div className="notes-container">
                    {searchNotes(searchTerm).map((note, index) => (
                        <NoteCard
                            key={index}
                            note={note}
                            onDelete={moveToTrash}
                            onEdit={editNote}
                            index={index}
                            trash={false}
                        />
                    ))}
                </div>
            </div> : null}

            {content === 'trash' ? <div className="notes"><h2>Trash</h2>
                <div className="notes-container">
                    {trashNotes.map((trashNote, index) => (
                        <NoteCard
                            key={index}
                            note={trashNote}
                            trash={true}
                        />
                    ))}
                </div>
            </div> : null}

            <Button className='add-note-btn' variant="primary" onClick={() => {
                setModalShow(true);
            }}>
                <i className="bi bi-plus-circle"></i>
            </Button>

            <ModalAddNote
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSave={addNote}
                onEdit={updateNote}
                noteToEdit={selectedNote}
                indexToEdit={selectedIndex}
                clearEditCache={clearEditCache}
            />


            <Nav
                notesCounter={notes.length}
                trashCounter={trashNotes.length}
                changeContent={changeContent}
            />
        </React.Fragment>
    );
}

export default App;