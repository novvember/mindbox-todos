import { FilterConfig, Task } from './interfaces';

export default function getStatus(
  filteredTasks: Task[],
  filterConfig: FilterConfig,
): string {
  const countAll = filteredTasks.length;
  const countDone = filteredTasks.filter((task) => task.isDone).length;
  const countUndone = countAll - countDone;

  if (filterConfig.group === 'all' || filterConfig.group === 'active') {
    if (countUndone > 0)
      return `${countUndone} ${countUndone === 1 ? 'item' : 'items'} left`;
    return `All done. Wow!`;
  }

  if (countDone > 0)
    return `${countDone} ${countDone === 1 ? 'item' : 'items'} done`;
  return `Nothing here`;
}
