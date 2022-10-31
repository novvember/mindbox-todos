import { useState, useEffect } from 'react';
import defaultTasks from '../../utils/defaultTasks';
import { Task } from '../../utils/interfaces';
import Add from '../Add/Add';
import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Item from '../Item/Item';
import Items from '../Items/Items';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(loadTasks());

  function loadTasks(): Task[] {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) return defaultTasks;
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

  function deleteTask(task: Task) {
    setTasks((tasks) => tasks.filter((item) => item.id !== task.id));
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
        <Items>
          {tasks.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                onEdit={editTask}
                onDelete={deleteTask}
              />
            );
          })}
        </Items>
        <Filter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
