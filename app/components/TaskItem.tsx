'use client';

import React from 'react';
import { Task } from '../recoil/atoms';

type TaskItemProps = {
  task: Task;
  toggleTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskStatus, deleteTask }) => {
  return (
    <div className="p-4 mb-4 border border-gray-300 rounded-md shadow-md bg-white flex flex-col">
      <div className="flex gap-2">
        <p className="text-lg font-medium min-w-20">
          {task.completed ? '完了' : '未完了'}
        </p>
        <p className="text-lg font-medium">タイトル: {task.title}</p>
      </div>
      <p className="text-sm text-gray-600 mb-2 whitespace-pre-line">
        Description: {task.description}
      </p>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => toggleTaskStatus(task.id)}
          className="px-4 py-2 font-semibold rounded-md bg-green-500 text-white hover:bg-green-600 shadow-md"
        >
          更新
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-4 py-2 bg-gray-300 text-gray-600 font-semibold rounded-md hover:bg-gray-400 shadow-md"
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
