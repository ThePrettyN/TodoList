'use client';

import { atom } from 'recoil';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const todoListState = atom<Task[]>({
  key: 'todoListState',
  default: [],
});
