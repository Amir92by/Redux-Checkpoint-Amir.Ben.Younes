import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../Actions/Types";

const initState={
                 taskList: [
                                {id: Math.random() , description: 'React-hooks' , isDone: false },
                                {id: Math.random() , description: 'React-router' , isDone: false },
                                {id: Math.random() , description: 'React-redux' , isDone: false },
                            ]
                }

const todoReducter= (state=initState, action)=>{
     switch(action.type){
        case ADD_TASK: return{
            ...state,
            taskList : [...state.taskList, action.payload ]
        }

        case DELETE_TASK: return {
            ...state,
            taskList : state.taskList.filter(task => task.id !== action.payload)
        }
 
        case EDIT_TASK: return {
            ...state,
            taskList: state.taskList.map(task =>
                 task.id === action.payload.id ? {...task, description:action.payload.newDescription} :task)
        }

        case COMPLETE_TASK: return {
           ...state,
           taskList: state.taskList.map(task =>
            task.id === action.payload ? {...task, isDone: !task.isDone} :task )
        }

         default :return state;
     }
}

export default todoReducter;