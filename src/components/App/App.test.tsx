import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import userEvent from '@testing-library/user-event';
import defaultTasks from '../../utils/defaultTasks';

describe('App component', () => {
  test('renders default tasks', () => {
    render(<App />);
    const rendered = screen
      .getAllByTestId('item-value')
      .map((el) => el.textContent);
    const defaults = defaultTasks.map((task) => task.value);
    expect(rendered).toEqual(defaults);
  });

  test('adds new task', () => {
    render(<App />);
    userEvent.type(screen.getByTestId('add-input'), 'this is test');
    userEvent.click(screen.getByTestId<HTMLInputElement>('add-button'));
    expect(screen.getByText('this is test')).toBeInTheDocument();
  });

  test('marks created task as done', () => {
    render(<App />);
    userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getByText('this is test')).toHaveClass('item__value_done');
  });

  test('deletes created task', () => {
    render(<App />);
    userEvent.click(screen.getAllByTestId('item-delete-button')[0]);
    expect(screen.queryByText('this is test')).not.toBeInTheDocument();
  });

  test('changes group to Completed', () => {
    render(<App />);
    userEvent.click(screen.getByText('Completed'));
    expect(screen.getAllByTestId('item-value').length).toBe(2);
  });

  test('deletes all done tasks', () => {
    render(<App />);
    userEvent.click(screen.getByText('Clear completed'));
    userEvent.click(screen.getByText('All'));
    expect(screen.getAllByTestId('item-value').length).toBe(6);
  });
});
