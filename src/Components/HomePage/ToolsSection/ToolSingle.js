import React from "react";
import { useNavigate } from "react-router-dom";

const ToolSingle = (props) => {
  const { _id, name, price, quantity, image, description } = props.singleTool;
  console.log("hello", name);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/purchase/${_id}`);
  };
  return (
    <>
      <section className="relative block bg-white">
        <button
          type="button"
          name="wishlist"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <span className="absolute p-2 text-white rounded-full left-4 top-4 text-xs font-medium bg-yellow-400">
          New
        </span>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          className="object-contain w-full h-56 lg:h-72"
          src={image}
        />

        <div className="p-6">
          <h5 className="my-2 text-3xl uppercase font-bold text-gray-800">
            {name}
          </h5>
          <p className="my-2 text-sm font-medium text-gray-600">{description}</p>
          <div className="my-2 flex justify-between text-sm font-medium text-gray-600">
            <p>Price $ {price} U/Q</p>
            <p>Available Quantity: {quantity}</p> 
          </div>

          <button
            name="add"
            type="button"
            className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-xl hover:shadow-xl"
            onClick={()=>handleNavigate(_id)}
          >
            <span className="text-xl uppercase">Buy Now</span>

            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default ToolSingle;
