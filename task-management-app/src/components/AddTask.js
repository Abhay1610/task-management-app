import React, { useState } from 'react';
import { useSetTasks } from '../atoms/tasksAtoms';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const setTasks = useSetTasks();

  const handleAddTask = () => {
    if (taskTitle) {
      const newTask = {
        id: Date.now(), // or use a better id generation method
        title: taskTitle,
        description: taskDescription,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]); // Use the updated hook
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 mb-2"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2 mb-2"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
