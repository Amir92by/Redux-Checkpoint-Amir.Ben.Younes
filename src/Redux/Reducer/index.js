import {combineReducers} from 'redux'

import todoReducter from './todoReducer'



const rootReducer = combineReducers( {todoReducter} )
export default rootReducer;