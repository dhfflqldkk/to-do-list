import React from "react";

function Todo({ task, index, toggleComplete, deleteTask }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "",
          marginLeft: "10px",
          flexGrow: 1
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default Todo;
