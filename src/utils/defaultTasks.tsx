import { Task } from './interfaces';

const defaultTasks: Task[] = [
  {
    value: 'Test assignment for Mindbox',
    isDone: true,
    id: 11,
  },
  {
    value: 'This is yet another toDo app with tasks and checkboxes',
    isDone: false,
    id: 10,
  },
  {
    value: 'Add a new task not to forget to buy tomatos for dinner 🍅',
    isDone: false,
    id: 9,
  },
  {
    value: 'Cross it out at a grocery store',
    isDone: true,
    id: 8,
  },
  {
    value: 'Corect mipsrints or delete unwanted tasks',
    isDone: false,
    id: 7,
  },
  {
    value: 'Filter all the tasks with the menu below',
    isDone: false,
    id: 6,
  },
  {
    value: 'All data is stored right in your browser',
    isDone: false,
    id: 5,
  },
  {
    value:
      "And this is a very very very long task with lots of text. User may want to add a long task and does want to see it entirely then. That's why tasks can be multi-line and look good anyway. That is that.",
    isDone: false,
    id: 4,
  },
];

export default defaultTasks;
