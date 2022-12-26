import React from 'react';
import TaskList from '../TaskList/TaskList';

function DeletedTasks({tasks,setTasks}) {
  return (
    <div>
        <h2>DeletedTasks</h2>
        <div>
          <TaskList status='deleted' tasks={tasks} setTasks={setTasks} showDone={false} showDelete={false} />
        </div>
    </div>
  )
}

export default DeletedTasks