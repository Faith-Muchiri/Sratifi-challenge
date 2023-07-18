import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="container mx-auto mt-12 px-4 flex-grow">
        <h1 className="text-center text-4xl font-semibold text-blue-600 mb-8 tracking-wide">
          #Todo App
        </h1>
        <nav className="flex justify-center space-x-4 mb-8">
          <Link
            to="/all"
            className={`text-gray-700 font-medium ${
              location.pathname === '/all' ? 'text-blue-600 underline' : ''
            }`}
          >
            All
          </Link>
          <Link
            to="/active"
            className={`text-gray-700 font-medium ${
              location.pathname === '/active' ? 'text-blue-600 underline' : ''
            }`}
          >
            Active
          </Link>
          <Link
            to="/completed"
            className={`text-gray-700 font-medium ${
              location.pathname === '/completed'
                ? 'text-blue-600 underline'
                : ''
            }`}
          >
            Completed
          </Link>
        </nav>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
