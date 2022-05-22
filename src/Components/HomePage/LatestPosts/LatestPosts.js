import React from "react";
import { VscDebugStart } from "react-icons/vsc";
import blog1 from "../../../images/blog-1.jpg";
import blog2 from "../../../images/blog-2.jpg";
import blog3 from "../../../images/blog-3.jpg";

const LatestPosts = () => {
  return (
    <>
      <div className="lg:my-24 my-12">
        <h1 className="text-5xl uppercase flex items-center justify-center text-lime-700 my-8">
          <i className="inline-block">
            <VscDebugStart />
          </i>
          Latest blogs
          <i className="inline-block">
            <VscDebugStart />
          </i>
        </h1>
        <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-8 px-5">
          <div className="block">
            <img src={blog1} alt="" />
            <div className="flex justify-between my-2">
              <p>{new Date().toDateString()} </p>
              <span className="font-bold text-green-300">by Rasel Mahmud</span>
            </div>
            <p className="text-xl my-2">
              Biten demons lector in henderit in vulp no...
            </p>
            <button className="uppercase text-2xl hover:text-red-300 p-3 rounded bg-lime-200">
              read more
            </button>
          </div>
          <div className="block">
            <img src={blog2} alt="" />
            <div className="flex justify-between my-2">
              <p>{new Date().toDateString()} </p>
              <span className="font-bold text-green-300">by Rasel Mahmud</span>
            </div>
            <p className="text-xl my-2">
              Biten demons lector in henderit in vulp no...
            </p>
            <button className="uppercase text-2xl hover:text-red-300 p-3 rounded bg-lime-200">
              read more
            </button>
          </div>
          <div className="block">
            <img src={blog3} alt="" />
            <div className="flex justify-between my-2">
              <p>{new Date().toDateString()} </p>
              <span className="font-bold text-green-300">by Rasel Mahmud</span>
            </div>
            <p className="text-xl my-2">
              Biten demons lector in henderit in vulp no...
            </p>
            <button className="uppercase text-2xl hover:text-red-300 p-3 rounded bg-lime-200">
              read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
