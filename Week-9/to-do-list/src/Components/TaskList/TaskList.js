import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import './TaskList.css';

function TaskList({tasks,setTasks,status,showDone,showDelete}) {
  function onDone(id){
    console.log("**@ onDone called with id , ",id);
    console.log("**@ tasks are  , ",tasks);
    const index=tasks.findIndex((task,i)=>task.id==id);
    console.log("**@ done task index is , ",index);
    tasks[index].status='done';
    setTasks(tasks);

  }

  function onDelete(id){
    console.log("**@ onDelete called with id , ",id);
    const index=tasks.findIndex((task,i)=>task.id==id);
    console.log("**@ done task index is , ",index);
    tasks[index].status='deleted';
    setTasks(tasks);
  }

  return (
    <div className='taskList'>
        <h1>Hello TaskList</h1>
{
        tasks?.reverse().filter(task=>task.status===status).map((task,i)=>(
             <TaskCard task={task} onDone={showDone && onDone} onDelete={ showDelete && onDelete} key={i}/>
        ))
    }
    </div>

  )
}

export default TaskList