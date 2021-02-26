
import {useState} from 'react'
import AddTask from './components/AddTask/AddTask';
import './App.css';
import ListTask from './components/ListTask/ListTask';
import FilterTask from './components/FilterTask/FilterTask';


function App() {

 
  const [filtredTaskList, setFiltredTaskList] = useState([])
  const [filterStatus, setFilterStatus] = useState('')

  return (

    
    <div className="App">
   
    <AddTask/>

    <FilterTask setFiltredTaskList={setFiltredTaskList}
     filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

    <ListTask filtredTaskList={filtredTaskList} filterStatus={filterStatus} />
     
    </div>
  );
}

export default App;
