import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NoteCard(props) { // nimmt alle props an, die durch die parent component übergeben werden
    return (
        <Card className='note-card' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.note.title}</Card.Title>
                <Card.Text>
                    {props.note.content}
                </Card.Text>
            </Card.Body>
            {!props.trash && (
                <div className='card-btns'>
                    <Button className='card-btn' onClick={() => props.onDelete(props.note, props.index)} variant="danger">Delete</Button>
                    <Button className='card-btn' onClick={() => props.onEdit(props.note, props.index)} variant='secondary'>Edit</Button>
                </div>
            )}
        </Card>
    );
}

export default NoteCard;