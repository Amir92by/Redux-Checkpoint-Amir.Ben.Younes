import React from 'react'
import { useSelector } from "react-redux";
import "./ListTask.css";
import TaskCard from '../TaskCard/TaskCard';

const ListTask = ({filtredTaskList,filterStatus}) => {
    const taskList = useSelector(state => state.todoReducter.taskList)

    return (
       
            <div className='list-task' >
                {
                    filterStatus === 'doneTasks' ||  filterStatus === 'undoneTasks'? 
                    filtredTaskList.map(task => 
                        <TaskCard task={task} key={task.id} />
                        )
                    :
                    taskList.map(task =>
                        <TaskCard task={task} key={task.id} /> 
                        )        
                }
            </div>
      
    )
}
 
export default ListTask
