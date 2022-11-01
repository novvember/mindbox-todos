import getStatus from './getStatus';
import { FilterConfig, Task } from './interfaces';

const severalUndone: Task[] = [
  {
    id: 1,
    value: 'test1',
    isDone: false,
  },
  {
    id: 2,
    value: 'test2',
    isDone: false,
  },
];

const severalDone: Task[] = [
  {
    id: 1,
    value: 'test1',
    isDone: true,
  },
  {
    id: 2,
    value: 'test2',
    isDone: true,
  },
];

const allGroup: FilterConfig = {
  group: 'all',
};

const activeGroup: FilterConfig = {
  group: 'active',
};

const completedGroup: FilterConfig = {
  group: 'completed',
};

describe('getStatus function', () => {
  it('status with several undone tasks on All page', () => {
    expect(getStatus(severalUndone, allGroup)).toBe('2 items left');
  });

  it('status with one undone task on All page', () => {
    expect(getStatus(severalUndone.slice(0, 1), allGroup)).toBe('1 item left');
  });

  it('status with no undone tasks on All page', () => {
    expect(getStatus(severalDone, allGroup)).toBe('All done. Wow!');
  });

  it('status with several undone tasks on Active page', () => {
    expect(getStatus(severalUndone, activeGroup)).toBe('2 items left');
  });

  it('status with one undone tasks on Active page', () => {
    expect(getStatus(severalUndone.slice(0, 1), activeGroup)).toBe(
      '1 item left',
    );
  });

  it('status with no undone tasks on Active page', () => {
    expect(getStatus(severalDone, activeGroup)).toBe('All done. Wow!');
  });

  it('status with several done tasks on Completed page', () => {
    expect(getStatus(severalDone, completedGroup)).toBe('2 items done');
  });

  it('status with one done task on Completed page', () => {
    expect(getStatus(severalDone.slice(0, 1), completedGroup)).toBe(
      '1 item done',
    );
  });

  it('status with no done tasks on Completed page', () => {
    expect(getStatus(severalUndone, completedGroup)).toBe('Nothing here');
  });

  it('status with empty array on All page', () => {
    expect(getStatus([], allGroup)).toBe('All done. Wow!');
  });
});
