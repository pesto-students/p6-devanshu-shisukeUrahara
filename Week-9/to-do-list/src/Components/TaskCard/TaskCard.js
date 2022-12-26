import React from 'react';
import './TaskCard.css'

function TaskCard({task,onDone,onDelete}) {
  return (
    <div className="card">
      <p>{task.description}</p>
      <div className="buttons">
       {onDone &&  <button onClick={()=>onDone(task.id)}>Done</button>}
       {onDelete && <button onClick={()=>onDelete(task.id)}>Delete</button>}
      </div>
    </div>
  )
}

export default TaskCard