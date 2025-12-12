import React, { useEffect, useMemo, useState, useCallback } from "react";

export default function App() {
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem("todos")) || []; } catch { return []; }
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const v = newTodo.trim();
    if (!v) return;
    setTodos(prev => [...prev, { id: Date.now(), title: v, completed: false }]);
    setNewTodo("");
  };
  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }, []);
  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);
  const completedCount = useMemo(() => todos.filter(t => t.completed).length, [todos]);

  return (
    <div className="container">
      <h1>React Junior Task: Todo List</h1>
      <label htmlFor="new-todo">New Todo</label>
      <div style={{ display: "flex", gap: 8 }}>
        <input id="new-todo" value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="What needs to be done?" />
        <button onClick={addTodo}>Add</button>
      </div>
      <p>Completed: {completedCount}/{todos.length}</p>
      <ul aria-live="polite" style={{ padding: 0, listStyle: "none" }}>
        {todos.map(t => (
          <li key={t.id} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <button onClick={() => toggleTodo(t.id)}>{t.completed ? "✅" : "⬜️"}</button>
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.title}</span>
            <button onClick={() => deleteTodo(t.id)} aria-label={`Delete ${t.title}`}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
