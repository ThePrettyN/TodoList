'use client';

import AddTask from './AddTask';
import TaskList from './TaskList';

const TaskManagement: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskManagement;
