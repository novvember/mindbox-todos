import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Item from './Item';
import userEvent from '@testing-library/user-event';
import { Task } from '../../utils/interfaces';

describe('Item component', () => {
  const undoneTask: Task = { id: 1, value: 'test', isDone: false };
  const doneTask: Task = { id: 1, value: 'test', isDone: true };
  const mockEdit = jest.fn();
  const mockDelete = jest.fn();

  test('exists in the DOM', () => {
    render(<Item item={undoneTask} onEdit={mockEdit} onDelete={mockDelete} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('renders correct checkbox state (checked)', () => {
    render(<Item item={doneTask} onEdit={mockEdit} onDelete={mockDelete} />);
    expect(screen.getByRole<HTMLInputElement>('checkbox').checked).toBeTruthy();
  });

  test('renders correct text state for done task', () => {
    render(<Item item={doneTask} onEdit={mockEdit} onDelete={mockDelete} />);
    expect(screen.getByTestId('item-value')).toHaveClass('item__value_done');
  });

  test('calls delete function on delete button click', () => {
    render(<Item item={doneTask} onEdit={mockEdit} onDelete={mockDelete} />);
    userEvent.click(screen.getByTestId('item-delete-button'));
    expect(mockDelete.mock.calls.length).toBe(1);
    expect(mockDelete.mock.calls[0][0]).toEqual(doneTask);
  });
});
