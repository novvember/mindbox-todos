import './Item.css';

function Item() {
  return (
    <li className="item">
      <input type="checkbox" className="item__checkbox" />
      <p className="item__value">Very important task</p>
      <div className="item__buttons">
        <button
          className="item__button item__button_type_edit"
          type="button"
          aria-label="Edit"
        ></button>
        <button
          className="item__button item__button_type_delete"
          type="button"
          aria-label="Delete"
        ></button>
      </div>
    </li>
  );
}

export default Item;
