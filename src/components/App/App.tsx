import { useState, useEffect } from 'react';
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
  }

  function editTask(task: Task) {
    setTasks((tasks) =>
      tasks.map((item) => (item.id === task.id ? task : item)),
    );
  }

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="content">
      <Header />
      <main className="main">
        <Add onAdd={addTask} />
        <Items items={tasks} onEdit={editTask} />
        <Filter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
