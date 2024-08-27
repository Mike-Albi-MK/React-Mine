import React from "react";


export const TaskItem = ({task, removeTask}) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => {}} />
      <span>{task.name}</span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
};