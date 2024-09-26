// app/components/TaskColumn.js
import React from 'react';
import TaskItem from './TaskItem';
const TaskColumn = ({ status, tasks }) => {
  return (
    <div className="flex-1 border p-2">
      <h2 className="text-xl font-semibold">{status}</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
