import React,{useState} from 'react';
import TaskList from '../TaskList/TaskList';
import './AddTask.css';



function AddTask({tasks,setTasks}) {

  // const [tasks,setTasks]=useState(taskList);
  const [newTask,setNewTask]=useState("");
  const handleAddTask= (e)=>{
    e.preventDefault();
    if(newTask){
    console.log("**@ new Task is , ",newTask);
    console.log('**@ before tasks are , ',tasks);
    let newTaskObj={
      id:tasks.length+1,
      description:newTask,
      status:'pending'
    }
    console.log("**@ new task object is , ",newTaskObj);
   tasks.push(newTaskObj);
   console.log('**@ after tasks are , ',tasks);
    setTasks(tasks);
    setNewTask("");
    }

  }

  return (
    <div>
        <h1>Add a new Task</h1>
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder="Go to gym at 6:00 AM"/>
        <button onClick={(e)=>handleAddTask(e)}>Add Task</button>

        <div>
          <TaskList status='pending' tasks={tasks} setTasks={setTasks} showDone={true} showDelete={true} />
        </div>
    </div>
  )
}

export default AddTask