import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks()
  }, [])

  //Fetch Task
    const fetchTask = async (id) => {
      const resp = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await resp.json();
  
      return data
    }
  

  //Fetch Tasks
  const fetchTasks = async () => {
    const resp = await fetch('http://localhost:5000/tasks');
    const data = await resp.json();

    return data
  }

  fetchTasks();

  //Add Task
  const addTask = async (task) => {

    const resp = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(task)
    })

    const data = await resp.json();

    setTasks([ ...tasks, data])


    // const id = Math.floor(Math.random() * 10000);
    // const newTask = { id, ...task}
    // setTasks([ ...tasks, newTask ])
  }

  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle Reminder
const toggleReminder = async (id) => {
  const toggledTask = await fetchTask(id);
  const updTask = { ...toggledTask, reminder: !toggledTask.reminder}
  const resp = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  const data = await resp.json();

  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
}

  return (
    <Router>
    <div className="container">
     <Header title = 'Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     <Routes>
     <Route exact path="/" element={<Home tasks={tasks} showAddTask={showAddTask} toggleReminder={toggleReminder} deleteTask={deleteTask} />} />
     <Route path='/about' element={<About />} />
     </Routes>
     <Footer />
     </div>
    </Router>

  );
}

export default App;
