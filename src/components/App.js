import React, { useState } from "react";
import Todo from "./Todo";
import "../styles/App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div id="main">
      <input
        id="taskInput"
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button id="addBtn" onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            text={todo}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
