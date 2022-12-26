import React from 'react';
import TaskList from '../TaskList/TaskList';

function DoneTasks({tasks,setTasks}) {
  return (
    <div>
        <h1>DoneTasks</h1>
        <div>
          <TaskList status='done' tasks={tasks} setTasks={setTasks} showDone={false} showDelete={false} />
        </div>
    </div>
  )
}

export default DoneTasks