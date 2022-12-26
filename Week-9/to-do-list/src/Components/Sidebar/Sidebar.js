import React from 'react';
import './Sidebar.css';

function Sidebar({selected,setSelected}) {

    return (
        <div className="sidebar">
          <div className={`sidebar-item ${selected === 'add' ? 'selected' : ''}`} onClick={()=>setSelected("add")}>Add Task</div>
          <div className={`sidebar-item ${selected === 'remaining' ? 'selected' : ''}`} onClick={()=>setSelected("remaining")}>Remaining Tasks</div>
          <div className={`sidebar-item ${selected === 'done' ? 'selected' : ''}`} onClick={()=>setSelected("done")}>Done Tasks</div>
          <div className={`sidebar-item ${selected === 'deleted' ? 'selected' : ''}`} onClick={()=>setSelected("deleted")}>Deleted Tasks</div>
        </div>
      );
}

export default Sidebar