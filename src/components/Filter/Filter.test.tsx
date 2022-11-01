import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filter from './Filter';
import userEvent from '@testing-library/user-event';
import { FilterConfig, Task } from '../../utils/interfaces';
import getStatus from '../../utils/getStatus';

describe('Filter component', () => {
  const filteredTasks: Task[] = [
    { id: 1, value: 'test1', isDone: false },
    { id: 1, value: 'test1', isDone: false },
  ];
  const allConfig: FilterConfig = { group: 'all' };
  const activeConfig: FilterConfig = { group: 'active' };
  const completedConfig: FilterConfig = { group: 'completed' };
  const mockChange = jest.fn();
  const mockDelete = jest.fn();

  test('exists in the DOM', () => {
    render(
      <Filter
        filteredTasks={filteredTasks}
        filterConfig={allConfig}
        onChange={mockChange}
        onDelete={mockDelete}
      />,
    );
    expect(screen.getByTestId('filter-groups')).toBeInTheDocument();
  });

  test('indicates current group (All)', () => {
    render(
      <Filter
        filteredTasks={filteredTasks}
        filterConfig={allConfig}
        onChange={mockChange}
        onDelete={mockDelete}
      />,
    );

    expect(
      screen.getByDisplayValue<HTMLFormElement>('all').checked,
    ).toBeTruthy();
  });

  test('indicates current group (Active)', () => {
    render(
      <Filter
        filteredTasks={filteredTasks}
        filterConfig={activeConfig}
        onChange={mockChange}
        onDelete={mockDelete}
      />,
    );

    expect(
      screen.getByDisplayValue<HTMLFormElement>('active').checked,
    ).toBeTruthy();
  });

  test('indicates current group (Completed)', () => {
    render(
      <Filter
        filteredTasks={filteredTasks}
        filterConfig={completedConfig}
        onChange={mockChange}
        onDelete={mockDelete}
      />,
    );

    expect(
      screen.getByDisplayValue<HTMLFormElement>('completed').checked,
    ).toBeTruthy();
  });

  test('changes group from All to Completed', () => {
    render(
      <Filter
        filteredTasks={filteredTasks}
        filterConfig={allConfig}
        onChange={mockChange}
        onDelete={mockDelete}
      />,
    );

    userEvent.click(screen.getByDisplayValue('completed'));

    expect(mockChange.mock.calls.length).toBe(1);
    expect(mockChange.mock.calls[0][0].group).toBe('completed');
  });

  test('calls right function on delete button', () => {
    render(
      <Filter
        filteredTasks={filteredTasks}
        filterConfig={allConfig}
        onChange={mockChange}
        onDelete={mockDelete}
      />,
    );

    userEvent.click(screen.getByText('Clear completed'));

    expect(mockDelete.mock.calls.length).toBe(1);
  });

  test('shows status from propper function', () => {
    render(
      <Filter
        filteredTasks={filteredTasks}
        filterConfig={allConfig}
        onChange={mockChange}
        onDelete={mockDelete}
      />,
    );

    expect(
      screen.getByText<HTMLFormElement>(getStatus(filteredTasks, allConfig)),
    ).toBeInTheDocument();
  });
});
