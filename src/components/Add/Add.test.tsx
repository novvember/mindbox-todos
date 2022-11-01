import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Add from './Add';
import userEvent from '@testing-library/user-event';

describe('Add component', () => {
  const mockAdd = jest.fn();

  test('exists in the DOM', () => {
    render(<Add onAdd={mockAdd} />);
    expect(screen.getByTestId('add-input')).toBeInTheDocument();
  });

  test('renders typed text', () => {
    render(<Add onAdd={mockAdd} />);
    userEvent.type(screen.getByTestId('add-input'), 'this is test');
    expect(screen.getByTestId<HTMLInputElement>('add-input').value).toBe(
      'this is test',
    );
  });

  test('sends correct task on submit', () => {
    render(<Add onAdd={mockAdd} />);
    userEvent.type(screen.getByTestId('add-input'), 'this is test');
    userEvent.click(screen.getByTestId<HTMLInputElement>('add-button'));
    expect(mockAdd.mock.calls.length).toBe(1);
    expect(mockAdd.mock.calls[0][0].value).toBe('this is test');
    expect(mockAdd.mock.calls[0][0].isDone).toBeFalsy();
  });
});
