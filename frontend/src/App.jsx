import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import axios from 'axios';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/task');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskName) => {
    try {
      const response = await axios.post('/task', { name: taskName });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error); }
  };

  const updateTask = async (id, taskName) => {
    try {
      const response = await axios.put(`/task/${id}`, { name: taskName });
      setTasks(tasks.map(task => (task._id === id ? response.data.data : task)));
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/task/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  return (
    <div className='container'>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} cancelEditing={cancelEditing} />
      <TaskList tasks={tasks} deleteTask={deleteTask} startEditing={startEditing} />
    </div>
  );
};

export default App;
