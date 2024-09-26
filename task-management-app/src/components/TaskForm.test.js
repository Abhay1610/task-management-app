// src/components/TaskForm.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import { tasksAtom } from '../../src/atoms/tasksAtoms';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  it('should allow user to create a task', () => {
    render(
      <Provider initialValues={[[tasksAtom, []]]}>
        <TaskForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/task title/i), {
      target: { value: 'New Task' },
    });
    fireEvent.change(screen.getByPlaceholderText(/task description/i), {
      target: { value: 'New Description' },
    });
    fireEvent.click(screen.getByText(/add task/i));

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});
