'use client';

import { useRecoilState } from 'recoil';
import { Task, todoListState } from '../recoil/atoms';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState<Task[]>(todoListState);

  const toggleTaskStatus = (id: string) => {
    setTasks((oldTasks: Task[]) =>
      oldTasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((oldTasks: Task[]) => oldTasks.filter((task: Task) => task.id !== id));
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-green-600 mb-4 text-center tracking-widest">
        LIST
      </h2>
      <div className="p-4 bg-green-50 rounded-lg shadow-md h-96 overflow-y-auto">
        {tasks.length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-xl text-gray-600">リストは空です。</p>
          </div>
        )}
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
