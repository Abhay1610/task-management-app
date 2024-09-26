// src/components/TaskBoard.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
import { tasksAtom } from '../../src/atoms/tasksAtoms';
import TaskBoard from './TaskBoard';

describe('TaskBoard Component', () => {
  const mockTasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
  ];

  it('renders active tasks correctly', () => {
    render(
      <Provider initialValues={[[tasksAtom, mockTasks]]}>
        <TaskBoard />
      </Provider>
    );

    expect(screen.getByText('Active Tasks')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });

  it('renders completed tasks correctly', () => {
    render(
      <Provider initialValues={[[tasksAtom, mockTasks]]}>
        <TaskBoard />
      </Provider>
    );

    expect(screen.getByText('Completed Tasks')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
  });
});
