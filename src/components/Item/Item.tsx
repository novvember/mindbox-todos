import './Item.css';

function Item() {
  return (
    <form className="item">
      <input type="checkbox" className="item__checkbox" />
      <p className="item__value">Very important task</p>
      <div className="item__buttons">
        <button
          className="item__button item__button_type_edit"
          aria-label="Edit"
        ></button>
        <button
          className="item__button item__button_type_delete"
          aria-label="Delete"
        ></button>
      </div>
    </form>
  );
}

export default Item;
