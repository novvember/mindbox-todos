import classNames from 'classnames';
import { ChangeEvent, FormEvent, useState } from 'react';
import './Add.css';

function Add() {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form action="" className="add" onSubmit={handleSubmit}>
      <input
        className="add__input"
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={handleChange}
      />
      <button
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
