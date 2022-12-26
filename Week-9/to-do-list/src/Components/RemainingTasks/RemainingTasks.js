import React from 'react';
import TaskList from '../TaskList/TaskList';

function RemainingTasks({tasks,setTasks}) {
  return (
    <div>
        <h1>RemainingTasks</h1>
        <div>
          <TaskList status='pending' tasks={tasks} setTasks={setTasks} showDone={true} showDelete={true} />
        </div>
    </div>
  )
}

export default RemainingTasks