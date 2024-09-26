// src/components/TaskCreation.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import { tasksAtom } from '../../src/atoms/tasksAtoms';
import TaskBoard from './TaskBoard';
import TaskForm from './TaskForm';

describe('Task Creation Process', () => {
  it('allows a user to create a task and see it on the task board', () => {
    render(
      <Provider initialValues={[[tasksAtom, []]]}>
        <TaskForm />
        <TaskBoard />
      </Provider>
    );

    // Simulate filling out the form
    fireEvent.change(screen.getByPlaceholderText(/task title/i), {
      target: { value: 'New Task' },
    });
    fireEvent.change(screen.getByPlaceholderText(/task description/i), {
      target: { value: 'New Description' },
    });
    fireEvent.click(screen.getByText(/add task/i));

    // Check if the task is now displayed in the TaskBoard
    expect(screen.getByText('New Task')).toBeInTheDocument();
    expect(screen.getByText('New Description')).toBeInTheDocument();
  });
});
