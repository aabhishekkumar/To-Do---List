import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Delete task by index
  const deleteTask = (deleteIndex) => {
    setTodos(todos.filter((_, index) => index !== deleteIndex));
  };

  return (
    <div className='todo-app'>
    <>
      <h2 className='heading'>To-Do List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={handleInputChange}
        className='input'
      />
      <button onClick={addTask}>Add Task</button>

      {todos.map((task, index) => (
        <li  className='list-class' key={index}>
          {task}
          <button className='btn-icon' onClick={() => deleteTask(index)}>❌</button>

        
        </li>
      ))}
    </>
    </div>
  );
};

export default App;
