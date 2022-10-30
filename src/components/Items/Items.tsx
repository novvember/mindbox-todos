import Item from '../Item/Item';
import './Items.css';
import { Task } from '../../utils/interfaces';

function Items({ items }: { items: Task[] }) {
  return (
    <ul className="items">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default Items;
