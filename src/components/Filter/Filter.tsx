import { FilterConfig, Task } from '../../utils/interfaces';
import './Filter.css';
import { ChangeEvent } from 'react';

function Filter({
  filteredTasks,
  filterConfig,
  onChange,
  onDelete,
}: {
  filteredTasks: Task[];
  filterConfig: FilterConfig;
  onChange: (config: FilterConfig) => void;
  onDelete: () => void;
}) {
  function handleGroupChange(event: ChangeEvent<HTMLInputElement>) {
    const group = event.target.value as FilterConfig['group'];
    onChange({ ...filterConfig, group });
  }

  return (
    <section className="filter">
      <span className="filter__status">2 items left</span>

      <form action="" className="filter__groups">
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            value="all"
            name="group"
            checked={filterConfig.group === 'all'}
            onChange={handleGroupChange}
          />
          <span className="filter__radio-label">All</span>
        </label>
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            value="active"
            name="group"
            checked={filterConfig.group === 'active'}
            onChange={handleGroupChange}
          />
          <span className="filter__radio-label">Active</span>
        </label>
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            value="completed"
            name="group"
            checked={filterConfig.group === 'completed'}
            onChange={handleGroupChange}
          />
          <span className="filter__radio-label">Completed</span>
        </label>
      </form>

      <button className="filter__delete-button" onClick={onDelete}>
        Clear completed
      </button>
    </section>
  );
}

export default Filter;
