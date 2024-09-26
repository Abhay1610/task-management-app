import React from 'react';
import { useAtom } from 'jotai';
import { tasksAtom, filterAtom } from '../../src/atoms/tasksAtoms'; // Adjust the import path as needed
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskBoard = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [filter] = useAtom(filterAtom);

  // Remove filteredTasks since it's not used in rendering
  // const filteredTasks = tasks.filter(task => {
  //   if (filter === 'Active') return !task.completed;
  //   if (filter === 'Completed') return task.completed;
  //   return true; // For 'All'
  // });

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const updatedTasks = Array.from(tasks);
    const [removed] = updatedTasks.splice(result.source.index, 1);
    
    // Check if moved to the completed section
    if (result.destination.droppableId === "completedTasks") {
      // Mark as completed
      removed.completed = true;
    }
    
    updatedTasks.splice(result.destination.index, 0, removed);
    setTasks(updatedTasks);
  };

  // Separate active and completed tasks for rendering
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="grid grid-cols-2 gap-4">
        <Droppable droppableId="activeTasks">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="bg-gray-100 p-4 rounded-lg shadow"
            >
              <h2 className="text-lg font-bold mb-2">Active Tasks</h2>
              {activeTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 border rounded mb-2 bg-white"
                    >
                      <h3 className="text-md font-semibold">{task.title}</h3>
                      <p>{task.description}</p>
                      <button onClick={() => markAsComplete(task.id)} className="mt-2 bg-blue-500 text-white p-2 rounded">
                        Complete
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completedTasks">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="bg-green-100 p-4 rounded-lg shadow"
            >
              <h2 className="text-lg font-bold mb-2">Completed Tasks</h2>
              {completedTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 border rounded mb-2 bg-white"
                    >
                      <h3 className="text-md font-semibold">{task.title}</h3>
                      <p>{task.description}</p>
                      <button onClick={() => markAsComplete(task.id)} className="mt-2 bg-blue-500 text-white p-2 rounded">
                        Complete
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
