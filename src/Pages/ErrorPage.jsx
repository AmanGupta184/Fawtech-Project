import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-900 dark:to-purple-900">
      <div className="text-center p-8 max-w-md mx-auto">
        <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400 animate-pulse">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mt-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
          Oops! It looks like the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
