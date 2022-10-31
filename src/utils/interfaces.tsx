export interface Task {
  id: number;
  value: string;
  isDone: boolean;
}

export interface FilterConfig {
  group: 'all' | 'active' | 'completed';
}
