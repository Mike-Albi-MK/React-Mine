import React, {useState} from "react";

export const TaskInput = ({createTask, fetchTasks}) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({name: newTask});
    fetchTasks();
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">
        Add Task
        </button>
    </form>
  );
};