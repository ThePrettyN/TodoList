'use client';

import { useState, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState, Task } from '../recoil/atoms';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [titleError, setTitleError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const setTasks = useSetRecoilState<Task[]>(todoListState);

  const handleAddTask = () => {
    if (title.trim() === '') {
      setTitleError(true);
      titleRef.current?.focus();
      return;
    } else {
      setTitleError(false);
    }

    if (description.trim() === '') {
      setDescriptionError(true);
      descriptionRef.current?.focus();
      return;
    } else {
      setDescriptionError(false);
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    setTasks((oldTasks: Task[]) => [...oldTasks, newTask]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-4 bg-green-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4 tracking-widest">My Tasks</h1>
      <input
        ref={titleRef}
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full p-2 mb-2 border ${titleError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
      />
      <textarea
        ref={descriptionRef}
        placeholder="内容"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`w-full p-2 mb-4 border ${descriptionError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
      />
      <button
        onClick={handleAddTask}
        className="w-full p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 shadow-md"
      >
        ADD
      </button>
    </div>
  );
};

export default AddTask;
