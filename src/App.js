// App.js
import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import AllPage from "./pages/AllPage";
import ActivePage from "./pages/ActivePage";
import CompletedPage from "./pages/CompletedPage";
import Footer from "./components/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDeleteCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="container mx-auto mt-12 px-4 flex-grow">
        <h1 className="text-center text-3xl font-semibold text-blue-600 mb-8 tracking-wide">
          #Todo App
        </h1>
        <nav className="flex justify-center space-x-4 mb-8">
          <Link
            to="/all"
            className={`text-gray-700 font-medium ${
              location.pathname === "/all" ? "text-blue-600 underline" : ""
            }`}
          >
            All
          </Link>
          <Link
            to="/active"
            className={`text-gray-700 font-medium ${
              location.pathname === "/active" ? "text-blue-600 underline" : ""
            }`}
          >
            Active
          </Link>
          <Link
            to="/completed"
            className={`text-gray-700 font-medium ${
              location.pathname === "/completed" ? "text-blue-600 underline" : ""
            }`}
          >
            Completed
          </Link>
        </nav>
        <Routes>
          <Route
            path="/all"
            element={
              <AllPage
                tasks={tasks}
                onAddTask={handleAddTask}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            }
          />
          <Route
            path="/active"
            element={
              <ActivePage
                tasks={tasks}
                onAddTask={handleAddTask}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <CompletedPage
                tasks={tasks}
                onAddTask={handleAddTask}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
                onDeleteCompletedTasks={handleDeleteCompletedTasks}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
