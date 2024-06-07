import React from 'react';

const TaskList = ({ tasks, deleteTask, startEditing }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          {task.name}
          <button onClick={() => startEditing(task)}>Edit</button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
