import React from 'react';
import './TodoItem.css'; // Import the CSS file for styling

function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <li className="todo-item">
      <span
        className={`task-text ${task.completed ? 'completed' : ''}`}
        onClick={() => toggleCompleted(task.id)}
      >
        {task.text}
      </span>
      <div className="task-actions">
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
