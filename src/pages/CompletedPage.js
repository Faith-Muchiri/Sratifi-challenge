import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import TodoItem from '../components/TodoItem';

const CompletedPage = ({ tasks, onAddTask, onToggleTask, onDeleteTask, onDeleteCompletedTasks }) => {
  const [taskName, setTaskName] = React.useState('');

  const handleAddTask = () => {
    if (!taskName.trim()) return;
    const newTask = { id: Date.now(), name: taskName, completed: false };
    onAddTask(newTask);
    setTaskName('');
  };

  const handleDeleteCompletedTask = (id) => {
    onDeleteTask(id); // Deleting a single completed task
  };

  const handleDeleteAllCompletedTasks = () => {
    onDeleteCompletedTasks(); // Deleting all completed tasks
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="flex-1 ml-2 border rounded py-2 px-4"
          placeholder="add details"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          task.completed && (
            <div key={task.id} className="flex items-center">
              <TodoItem
                task={task}
                onToggle={onToggleTask}
                onDelete={handleDeleteCompletedTask} // Use handleDeleteCompletedTask for deleting a single completed task
              />
              <button
                className="text-black ml-auto"
                onClick={() => handleDeleteCompletedTask(task.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          )
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleDeleteAllCompletedTasks} // Use handleDeleteAllCompletedTasks for deleting all completed tasks
        >
          <FontAwesomeIcon icon={faTrashAlt} /> Delete all
        </button>
      </div>
    </div>
  );
};

export default CompletedPage;
