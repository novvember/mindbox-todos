import { useState, useEffect, useCallback } from 'react';
import defaultFilterConfig from '../../utils/defaultFilterCongig';
import defaultTasks from '../../utils/defaultTasks';
import { FilterConfig, Task } from '../../utils/interfaces';
import Add from '../Add/Add';
import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Item from '../Item/Item';
import Items from '../Items/Items';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(loadTasks() as Task[]);
  const [filterConfig, setFilterConfig] = useState(
    loadFilterConfig() as FilterConfig,
  );
  const [filteredTasks, setFilteredTasks] = useState([] as Task[]);

  // Filter

  function loadFilterConfig() {
    const filterConfig = localStorage.getItem('filterConfig');
    if (!filterConfig) return defaultFilterConfig;
    return JSON.parse(filterConfig);
  }

  const filterTasks = useCallback(() => {
    const newTasks = tasks.filter((task) => {
      if (filterConfig.group === 'all') return true;
      if (filterConfig.group === 'active') return !task.isDone;
      return task.isDone;
    });
    setFilteredTasks(newTasks);
  }, [filterConfig.group, tasks]);

  useEffect(() => {
    if (filterConfig) {
      localStorage.setItem('filterConfig', JSON.stringify(filterConfig));
      filterTasks();
    }
  }, [filterConfig, filterTasks]);

  // Tasks

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
      <Add onAdd={addTask} />
      <main className="main">
        <Items>
          {filteredTasks.map((item) => {
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
        <Filter
          filteredTasks={filteredTasks}
          filterConfig={filterConfig}
          onChange={setFilterConfig}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
