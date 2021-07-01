import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task 1',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Task 2',
        day: 'Feb 6th at 3:30 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Task 3',
        day: 'Feb 7th at 4:30 pm',
        reminder: false,
    }

]);

// Delete Task Function

  const deleteTask = (id)  => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

// Toggle Reminder

  const toggleReminder = (id) => {
    console.log(id);
  }

  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ('No Tasks To Show')}
    </div>
  );
}


export default App;
