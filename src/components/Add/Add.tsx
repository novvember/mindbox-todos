import classNames from 'classnames';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../../utils/interfaces';
import './Add.css';

function Add({ onAdd }: { onAdd: (v: Task) => void }) {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value) {
      const task: Task = {
        id: Number(new Date()),
        value: value,
        isDone: false,
      };
      onAdd(task);
      setValue('');
    }
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <input
        data-testid="add-input"
        className="add__input"
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={handleChange}
      />
      <button
      data-testid="add-button"
        className={classNames('add__save-button', {
          'add__save-button_active': value,
        })}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default Add;
