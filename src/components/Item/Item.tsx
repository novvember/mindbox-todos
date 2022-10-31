import { Task } from '../../utils/interfaces';
import Checkbox from '../Checkbox/Checkbox';
import './Item.css';
import classNames from 'classnames';
import { useState, useRef, useEffect, FocusEvent, KeyboardEvent } from 'react';

function Item({
  item,
  onEdit,
  onDelete,
}: {
  item: Task;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}) {
  const [value, setValue] = useState(item.value);
  const [isEditMode, setIsEditMode] = useState(false);
  const valueRef = useRef(null);

  function handleDone() {
    onEdit({ ...item, isDone: !item.isDone });
  }

  function handleDelete() {
    onDelete(item);
  }

  function handleEdit() {
    setIsEditMode(true);
  }

  useEffect(() => {
    if (isEditMode && valueRef?.current) {
      const element = valueRef.current as HTMLElement;
      element.focus();
      window.getSelection()!.selectAllChildren(element);
      window.getSelection()!.collapseToEnd();
    }
  }, [valueRef, isEditMode]);

  function handleFocus(event: FocusEvent<HTMLParagraphElement, Element>) {
    setValue(event.target.textContent!);
  }

  function handleBlur(event: FocusEvent<HTMLParagraphElement, Element>) {
    setValue(event.target.textContent!);
    setIsEditMode(false);
  }

  useEffect(() => {
    if (value !== item.value) {
      onEdit({ ...item, value: value });
    }
  }, [value, item, onEdit]);

  function handleKeyDown(event: KeyboardEvent<HTMLParagraphElement>) {
    if (event.key === 'Enter' || event.key === 'Escape') {
      const element = valueRef.current! as HTMLElement;
      element.blur();
    }
  }

  return (
    <li className={classNames('item', { item_editable: isEditMode })}>
      <Checkbox
        className="item__checkbox"
        checked={item.isDone}
        onChange={handleDone}
      />
      <p
        className={classNames('item__value', { item__value_done: item.isDone })}
        contentEditable={isEditMode}
        ref={valueRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      >
        {item.value}
      </p>
      <div className="item__buttons">
        {!isEditMode && (
          <>
            <button
              className="item__button item__button_type_edit"
              type="button"
              aria-label="Edit"
              onClick={handleEdit}
            ></button>
            <button
              className="item__button item__button_type_delete"
              type="button"
              aria-label="Delete"
              onClick={handleDelete}
            ></button>
          </>
        )}
      </div>
    </li>
  );
}

export default Item;
