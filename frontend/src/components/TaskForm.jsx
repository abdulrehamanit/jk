import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, editingTask, cancelEditing }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
    } else {
      setTaskName('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      updateTask(editingTask._id, taskName);
    } else {
      addTask(taskName);
    }
      setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
      {editingTask && <button onClick={cancelEditing}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
