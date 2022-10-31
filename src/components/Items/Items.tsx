import Item from '../Item/Item';
import './Items.css';
import { Task } from '../../utils/interfaces';

function Items({
  items,
  onEdit,
}: {
  items: Task[];
  onEdit: (task: Task) => void;
}) {
  return (
    <ul className="items">
      {items.map((item) => {
        return <Item key={item.id} item={item} onEdit={onEdit} />;
      })}
    </ul>
  );
}

export default Items;
