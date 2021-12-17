// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

const App = () => {
  const name="Hare Krishna"
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])

  useEffect( () => {
    
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()

  }, [])

//Fetch or Get tasks from json server
const fetchTasks = async() =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data= res.json

  return data
}

//Add Task
const addTask= (task) =>{
  const id=Math.floor(Math.random()*100 + 1)
  const newTask = {id, ...task }
  setTasks([ ...tasks , newTask])
  console.log('add', id, ' ' ,task)
}

//Delete task
const deleteTask= (id) =>{
  console.log('delete',id)
  setTasks( tasks.filter((tsk)=>tsk.id !== id))
}

//toggle task
const toggleReminder=(id) =>{
  console.log("reminder set for ",id)
  setTasks(tasks.map( (task)=> task.id === id ? {...task, reminder:!task.reminder} : task ))
}

  return (
    <div className="container">
      {/* header component for provided props initialisation 
      <Header title="How are u?s"/>*/}
      
      {/*header component for default props initialisation*/}
      <Header title={name} 
      onAdd={()=>setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      />
      
      {/*it generates warning as the propTypes for 
      the Header component is set to string only 
      <Header title={1}/>
       */}

      {showAddTask ? <AddTask onAdd={addTask}/> : ''}

       {tasks.length > 0 ? 
       (
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
       )
       :( 'No Tasks.Add Tasks to display')
       }

    </div>
  );
}


//class based component
// class App extends React.Component{
//   render(){
//       return <p>Hello to {name}</p>
//   }
// }


export default App;
