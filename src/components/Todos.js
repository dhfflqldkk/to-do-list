import React from "react";
import Todo from "./Todo";

function Todos({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Todo
          key={index}
          index={index}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Todos;
