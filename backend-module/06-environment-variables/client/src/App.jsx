import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import { TaskInput } from './components/TaskingInput';
import { TaskList } from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:8000/tasks');
    setTasks(response.data.data);
  };

  const createTask = async (task) => {
    console.log(task);

    const response = await axios.post('http://localhost:8000/tasks', task)
    setTasks((prevState) => [...prevState, response.data.data]);
  };
  console.log(tasks);

  const removeTask = async (id) => {
    await axios.delete(`http://localhost:8000/tasks/${id}`);

    setTasks(prevState => prevState.filter(task => task.id !== id));
  };

  const modifiyTask = async (id) => {
    const response = await axios.put(`http://localhost:8000/tasks/${id}`);

    setTasks
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    < div className="App">
      <TaskInput createTask={createTask} fetchTasks={fetchTasks}/>
      <TaskList tasks={tasks} removeTask={removeTask}/>
    </div>
  );
};

export default App
