import { NextPage } from 'next';
import TaskManagement from './components/TaskManagement';

const Home: NextPage = () => {
  return (
    <div>
      <TaskManagement />
    </div>
  );
};

export default Home;
