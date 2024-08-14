import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'; // Import the CSS file for styling

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor Appointment', completed: true },
    { id: 2, text: 'Meeting at School', completed: false },
  ]);

  const [text, setText] = useState('');

  function addTask(text) {
    if (!text.trim()) return; // Prevent adding empty tasks
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <div className="todo-list">
      <h1 className="todo-list-title">My Todo List</h1>
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks available</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </ul>
      )}
      <div className="add-task">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={() => addTask(text)}>Add Task</button>
      </div>
    </div>
  );
}

export default TodoList;
