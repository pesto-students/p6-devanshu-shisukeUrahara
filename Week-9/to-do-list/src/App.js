import {useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TaskList from './Components/TaskList/TaskList';
import Sidebar from './Components/Sidebar/Sidebar';
import AddTask from './Components/AddTask/AddTask';
import DeletedTasks from './Components/DeletedTasks/DeletedTasks';
import DoneTasks from './Components/DoneTasks/DoneTasks';
import RemainingTasks from './Components/RemainingTasks/RemainingTasks';

const taskList=[
  {
    id:1,
    heading:"Task 1",
    description:"Task description 1",
    status:'pending'
  },
  {
    id:2,
    heading:"Task 2",
    description:"Task description 2",
    status:'pending'
  },
  {
    id:3,
    heading:"Task 3",
    description:"Task description 3",
    status:'pending'
  },
  {
    id:4,
    heading:"Task 4",
    description:"Task description 4",
    status:'pending'
  },
  {
    id:5,
    heading:"Task 5",
    description:"Task description 5",
    status:'pending'
  },
  {
    id:6,
    heading:"Task 6",
    description:"Task description 6",
    status:'pending'
  }
];
function App() {
  const [selected,setSelected]=useState("add");
  const [tasks,setTasks]=useState(taskList);
  const [doneTasks,setDoneTasks]=useState([]);
  const [deletedTasks,setDeletedTasks]=useState([]);
  console.log("**@ selected is , ",selected)

  return (
    <div className="App">
      <Header />
      <Sidebar selected={selected} setSelected={setSelected}/>
      {selected ==='add' && <AddTask tasks={tasks} setTasks={setTasks}/>}
      {selected ==='remaining' && <RemainingTasks tasks={tasks} setTasks={setTasks} />}
      {selected ==='done' && <DoneTasks tasks={tasks} setTasks={setTasks} />}
      {selected ==='deleted' && <DeletedTasks tasks={tasks} setTasks={setTasks} />}

    </div>
  );
}

export default App;
