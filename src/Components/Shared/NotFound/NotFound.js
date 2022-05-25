import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../images/not-found.gif";
const NotFound = () => {
  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg">
      <div className="flex justify-center">
        <img className="image-full" src={notFound} alt="" />
      </div>

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
