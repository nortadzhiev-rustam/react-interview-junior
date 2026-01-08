import React, { useEffect, useState } from "react";
import "./styles.css";
import { useGetTodos } from "./use-get-todos";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <div className="todo-content" onClick={() => onToggle(todo.id)}>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          aria-label={`Mark ${todo.title} as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />
        <span className={todo.completed ? "completed-text" : ""}>
          {todo.title}
        </span>
      </div>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        aria-label={`Delete ${todo.title}`}
      >
        Delete
      </button>
    </li>
  );
};

export default function App() {
  const [todos, setTodos] = useState(useGetTodos());

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const title = newTodo.trim();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTask]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="container">
      <h1>Todo List</h1>

      <form onSubmit={handleAddTodo} className="todo-form">
        <div className="input-group">
          <label htmlFor="new-todo" className="sr-only">
            New Todo
          </label>
          <input
            id="new-todo"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            autoFocus
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </div>
      </form>

      <p className="status-text">
        Completed: <strong>{completedCount}</strong> / {todos.length}
      </p>

      <ul className="todo-list" aria-live="polite">
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            todo={t}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty-state">No tasks yet. Start by adding one above!</p>
      )}
    </div>
  );
}
