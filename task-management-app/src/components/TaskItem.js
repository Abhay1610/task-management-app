// app/components/TaskItem.js
import React from 'react';
import { useSetTasks } from '../atoms/tasksAtoms'; // Custom hook to set tasks

const TaskItem = ({ task }) => {
  const setTasks = useSetTasks(); // Get setter function from Jotai store

  const handleToggleComplete = () => {
    setTasks((prevTasks) => 
      prevTasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
      <div>
        <button onClick={handleToggleComplete} className="bg-green-500 text-white p-1 mr-2">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDeleteTask} className="bg-red-500 text-white p-1">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
