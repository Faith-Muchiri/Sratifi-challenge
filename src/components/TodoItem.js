import React from 'react';

const TodoItem = ({ task, onToggle, onDelete }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />
    <span className={`ml-2 ${task.completed ? 'line-through' : ''}`}>
      {task.name}
    </span>
    {task.completed && (
      <button className="ml-auto text-red-600" onClick={() => onDelete(task.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    )}
  </div>
);

export default TodoItem;

