import { Button } from 'react-bootstrap'
import React from 'react'
import {useDispatch} from 'react-redux'
import './TaskCard.css'
import { completeTask, deleteTask } from '../../Redux/Actions/Action'
import { EditTask } from '../EditTask/EditTask'


const TaskCard = ({task}) => {

    const dispatch = useDispatch()
    return (

        <div className='Task-card'>
            <span className={task.isDone? 'titleCard' : null}> {task.description} </span>

       
    
                {/******Delete****/}
                <Button  className='CardBtn'variant="danger"
                onClick={()=>dispatch(deleteTask(task.id))}
                > Delete</Button>
    
                {/******Complete****/}
                <Button className='CardBtn'variant="light"
                onClick={()=> dispatch(completeTask(task.id))}
                > {task.isDone? 'UnDone':'Done'}</Button> 
            {/******Edite****/}
             <EditTask task={task} />
       

           
        </div>
    )
}

export default TaskCard
