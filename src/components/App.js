
import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };


  return (
    <div className="app">
      <h1>React To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <Todo todos={todos} onDelete={handleDeleteTodo} />
    </div>
  )
}

export default App;
