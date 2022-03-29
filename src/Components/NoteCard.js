import {Card, Button, Stack} from "react-bootstrap";
import {useNotes} from '../Contexts/NotesContext';

export default function NoteCard({id, note}){
	const {deletenote,updatenote,notes} = useNotes()
	const noteId = notes.find(n=> n.id === id)
	return (
		<Card>
			<Card.Body>
		        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
		          <div className="me-2">{note}</div>
		        </Card.Title>
	          <Stack direction="horizontal" gap="2" className="mt-4">
	            <Button onClick = {()=> {
	            	updatenote(noteId, note="ddddd")
	            }}
	              variant="outline-primary"
	              className="ms-auto"
	            >
	              update
	            </Button>
	            <Button onClick = {()=> {
	            	deletenote(noteId)
	            }}variant="outline-danger">
	              Delete
	            </Button>
	          </Stack>
			</Card.Body>
		</Card>
		)
}