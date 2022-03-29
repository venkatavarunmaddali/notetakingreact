import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './Notes.js';
import NoteCard from './Components/NoteCard.js';
import AddNotesModal from './Components/AddNotesModal.js';

import Container from 'react-bootstrap/Container';
import {Button, Stack} from 'react-bootstrap';
import {useNotes} from './Contexts/NotesContext';

function App() {
  useEffect(() => {
     document.title = "Note Taking App"
  }, []);
  const [showAddNotesModal, setShowAddNotesModal] = useState(false)
  const {notes} = useNotes()
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Notes App</h1>
          <Button variant="primary" onClick={() => setShowAddNotesModal(true)}>
            Add Note
          </Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
        </div>
        {notes.map(note => (
          <NoteCard key={note.id} id = {note.id} note={note.note}></NoteCard>
        ))}
        <AddNotesModal show={showAddNotesModal} handleClose = {()=> setShowAddNotesModal(false)}/>
      </Container>
    </>
    )
}

export default App;
