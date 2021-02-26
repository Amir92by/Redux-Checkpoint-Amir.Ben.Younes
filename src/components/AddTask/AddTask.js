import { Button,Form } from 'react-bootstrap'
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../../Redux/Actions/Action';
import './AddTask.css';


const AddTask = () => {
    const [inputTitle, setInputTitle] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='add-continer'>
            <Form.Control className='input-add' type="text"
             placeholder="Enter task description ..."
             onChange={(e)=> setInputTitle(e.target.value)}
             value={inputTitle}
             />

            <Button className='addBtn' variant="info"
            onClick={()=> {
                dispatch(addTask({id: Math.random() ,description:inputTitle ,isDone: false}))
                setInputTitle('')
        }}
            >
                 Add </Button>
        </div>
    )
}

export default AddTask
