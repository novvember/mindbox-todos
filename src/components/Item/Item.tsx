import './Item.css';

function Item() {
  return (
    <form className="item">
      <input type="checkbox" className="item__checkbox" />
      <p className="item__value">Very important task</p>
      <button className="item__button item__button_type_edit">Edit</button>
      <button className="item__button item__button_type_delete">Delete</button>
    </form>
  );
}

export default Item;
