import './Filter.css';

function Filter() {
  return (
    <section className="filter">
      <span className="filter__status">2 items left</span>
      <form action="" className="filter__groups">
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            id="all"
            name="group"
          />
          <span className="filter__radio-label">All</span>
        </label>
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            id="active"
            name="group"
          />
          <span className="filter__radio-label">Active</span>
        </label>
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            id="completed"
            name="group"
          />
          <span className="filter__radio-label">Completed</span>
        </label>
      </form>
      <button className="filter__delete-button">Clear completed</button>
    </section>
  );
}

export default Filter;
