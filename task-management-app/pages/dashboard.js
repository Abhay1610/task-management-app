import { useAtom } from 'jotai';
import React from 'react';
import AddTask from '../src/components/AddTask';
import TaskBoard from '../src/components/TaskBoard';
import TaskChart from '../src/components/TaskChart';
import { tasksAtom, filterAtom, useSetFilter } from '../src/atoms/tasksAtoms'; // Adjust import as needed
import { darkModeAtom } from '../src/atoms/themeAtom'; // Import the dark mode atom

const Dashboard = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [filter] = useAtom(filterAtom); // Get the current filter state
  const setFilter = useSetFilter(); // Get the function to set the filter
  const [darkMode, setDarkMode] = useAtom(darkModeAtom); // Use dark mode atom

  // Function to handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl font-bold mb-4">Task Management Dashboard</h1>
      <button onClick={toggleDarkMode} className="mb-4 p-2 bg-blue-500 text-white rounded">
        Toggle Dark Mode
      </button>
      <AddTask setTasks={setTasks} />
      
      {/* Filter Buttons */}
      <div className="mb-4">
        <button onClick={() => handleFilterChange('All')} className="mr-2 bg-gray-300 p-2 rounded">All</button>
        <button onClick={() => handleFilterChange('Active')} className="mr-2 bg-gray-300 p-2 rounded">Active</button>
        <button onClick={() => handleFilterChange('Completed')} className="bg-gray-300 p-2 rounded">Completed</button>
      </div>
      
      <TaskBoard tasks={tasks} filter={filter} /> {/* Pass filter to TaskBoard */}
      <TaskChart tasks={tasks} />
    </div>
  );
};

export default Dashboard;
