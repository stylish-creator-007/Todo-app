import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task" />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;