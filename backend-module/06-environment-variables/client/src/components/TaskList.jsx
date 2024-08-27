import React from 'react';
import {TaskItem} from './TaskItem';

export const TaskList = ({tasks, removeTask}) => {
  return (
    <ul>
        {tasks.map((task) => {
          console.log(task);
          <TaskItem key={task.id} task={task} />
        })}
        </ul>
  );
};
