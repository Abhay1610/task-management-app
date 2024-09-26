// src/atoms/tasksAtom.js
import { atom, useAtom } from 'jotai';

// Function to load tasks from local storage
const loadTasksFromLocalStorage = () => {
  // Check if localStorage is available
  if (typeof window !== 'undefined') {
    const savedTasks = localStorage.getItem('tasks');
    
    // If savedTasks is null, return an empty array
    if (savedTasks === null) {
      return [];
    }
    
    // Try to parse the tasks; if parsing fails, return an empty array
    try {
      return JSON.parse(savedTasks);
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      return [];
    }
  }
  return []; // Return an empty array if localStorage is not available
};

// Atom to hold the list of tasks with data persistence
export const tasksAtom = atom(loadTasksFromLocalStorage());

// New atom for managing the filter state
export const filterAtom = atom('All'); // Default filter is set to 'All'

// Custom hook for getting tasks
export const useTasks = () => {
  return useAtom(tasksAtom);
};

// Custom hook for setting tasks
export const useSetTasks = () => {
  const [, setTasks] = useAtom(tasksAtom);
  return (newTasks) => {
    // Update local storage whenever tasks change
    if (typeof window !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
    setTasks(newTasks);
  };
};

// Custom hook for getting the current filter
export const useFilter = () => {
  return useAtom(filterAtom);
};

// Custom hook for setting the current filter
export const useSetFilter = () => {
  const [, setFilter] = useAtom(filterAtom);
  return setFilter;
};
