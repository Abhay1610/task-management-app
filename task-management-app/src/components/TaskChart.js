import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAtom } from 'jotai';
import { tasksAtom } from '../../src/atoms/tasksAtoms'; // Ensure this path matches your atom location

const TaskChart = () => {
  const [tasks] = useAtom(tasksAtom);

  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = tasks.length - completedTasks;

  const data = [
    { name: 'Active Tasks', count: activeTasks },
    { name: 'Completed Tasks', count: completedTasks },
  ];

  return (
    <div>
      <h2>Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
};

export default TaskChart;
