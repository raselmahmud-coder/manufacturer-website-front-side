import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-medium">There's nothing here...</h2>

      <p className="mt-4 text-sm text-gray-500">
        Hits a right path will appear here, try again one!
      </p>

      <Link
        to="/"
        className="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
      >
        Go Back To Home
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="flex-shrink-0 w-4 h-4 ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NotFound;
