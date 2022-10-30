import { Task } from '../../utils/interfaces';
import './Item.css';

function Item({ item }: { item: Task }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        className="item__checkbox"
        defaultChecked={item.isDone}
      />
      <p className="item__value">{item.value}</p>
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
