import React, { useState } from "react";

const Todo = () => {

  // Input State
  const [task, setTask] = useState("");

  // Todo List State
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle Complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <hr />

      {/* Todo List */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>

            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default Todo;