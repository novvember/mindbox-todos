import { Task } from '../../utils/interfaces';
import Checkbox from '../Checkbox/Checkbox';
import './Item.css';
import classNames from 'classnames';

function Item({
  item,
  onEdit,
  onDelete,
}: {
  item: Task;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}) {
  function handleDone() {
    onEdit({ ...item, isDone: !item.isDone });
  }

  function handleDelete() {
    onDelete(item);
  }

  return (
    <li className="item">
      <Checkbox
        className="item__checkbox"
        checked={item.isDone}
        onChange={handleDone}
      />
      <p
        className={classNames('item__value', { item__value_done: item.isDone })}
      >
        {item.value}
      </p>
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
          onClick={handleDelete}
        ></button>
      </div>
    </li>
  );
}

export default Item;
