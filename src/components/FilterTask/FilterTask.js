import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import {ButtonGroup,Button  } from "react-bootstrap";
import './FilterTask.css'


const FilterTask = ({setFiltredTaskList,filterStatus,setFilterStatus}) => {

    const taskList = useSelector(state => state.todoReducter.taskList)

    useEffect(() => {
        filterTask()
    })

    const filterTask =() =>{
        switch (filterStatus) { 

            case 'allTasks':  setFiltredTaskList(taskList); break;
            case 'doneTasks':setFiltredTaskList(taskList.filter(task => task.isDone=== true)); break;
            case 'undoneTasks': setFiltredTaskList(taskList.filter(task => task.isDone=== false)); break;
            default: return taskList;
        }
    }

    return (
        <ButtonGroup className='container-filter'>

            <Button variant="secondary" className='filterBtn'
            onClick={()=> setFilterStatus('allTasks')}
            > All Tasks</Button>


            <Button variant="secondary" className='filterBtn'
             onClick={()=> setFilterStatus('doneTasks')}
            > Done</Button>


            <Button variant="secondary" className='filterBtn'
             onClick={()=> setFilterStatus('undoneTasks')}
            > UnDone</Button>
        </ButtonGroup>
    )
}

export default FilterTask
