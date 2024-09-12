import React from 'react';
import Card from 'react-bootstrap/Card';

function NoteCard(props) { // nimmt alle props an, die durch die parent component übergeben werden
    return ( 
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
     );
}

export default NoteCard;