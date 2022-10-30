import { useState } from 'react';
import { Task } from '../../utils/interfaces';
import Add from '../Add/Add';
import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Items from '../Items/Items';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(loadTasks());

  function loadTasks(): Task[] {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) return [];
    return JSON.parse(tasks);
  }

  function addTask(task: Task) {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <div className="content">
      <Header />
      <main className="main">
        <Add onAdd={addTask} />
        <Items items={tasks} />
        <Filter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
