import { Button,Modal,Form } from "react-bootstrap";
import {useState} from "react"
import{useDispatch} from 'react-redux'
import { editTask } from "../../Redux/Actions/Action";


export const EditTask=({task}) =>{
    const [show, setShow] = useState(false);
    /***neWTitle***/
    const [newDescription, setNewDescription] = useState('')
    const dispatch = useDispatch()
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>

          {/***newDescription***/}
          <Modal.Body> 
                <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter the new task description ..."
                        onChange={(e)=>setNewDescription(e.target.value)}
                        value={newDescription}
                        />


                </Form.Group>
          </Modal.Body>
          
          
          <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>

                {/***Dispatch neWTitle & id***************************************************/}
                <Button variant="primary" onClick={handleClose}
                onClick={()=>{
                    dispatch(editTask(task.id,newDescription))
                    handleClose()
                }}
                >
                Save Edit
                </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }