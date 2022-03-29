import { Form, Modal, Button } from "react-bootstrap"
import { useRef } from "react"
import { useNotes } from "../Contexts/NotesContext"

export default function AddNotesModal({ show, handleClose }) {
  const noteRef = useRef()
  const { addnote } = useNotes()
  function handleSubmit(e) {
    e.preventDefault()
    addnote({
      note: noteRef.current.value,
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="note">
            <Form.Label>Note</Form.Label>
            <Form.Control ref={noteRef} type="text" required />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}