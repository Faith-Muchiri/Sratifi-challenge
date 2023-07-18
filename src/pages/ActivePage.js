import React from 'react';
import TodoItem from '../components/TodoItem';

const ActivePage = ({ tasks, onAddTask, onToggleTask, onDeleteTask }) => {
  const [taskName, setTaskName] = React.useState('');

  const handleAddTask = () => {
    if (!taskName.trim()) return;
    const newTask = { id: Date.now(), name: taskName, completed: false };
    onAddTask(newTask);
    setTaskName('');
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
          !task.completed && (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ActivePage;
