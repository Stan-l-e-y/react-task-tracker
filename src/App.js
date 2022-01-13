import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc app',
      dat: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      dat: 'Feb 2th at 5:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Foop Shopping',
      dat: 'Feb 10th at 1:30pm',
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
      <h1>Hello From React</h1>
    </div>
  );
}

export default App;
