import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./Types"

export const addTask =(payload)=>{
   return{
    type: ADD_TASK,
    payload
   }
}


export const deleteTask =(payload)=>{
   return{
    type: DELETE_TASK,
    payload
   }
}


export const editTask =(id,newDescription)=>{
   return{
    type: EDIT_TASK,
    payload: {id, newDescription}
   }
}

export const completeTask =(payload)=>{
return{
     type: COMPLETE_TASK,
     payload
    }
 }

