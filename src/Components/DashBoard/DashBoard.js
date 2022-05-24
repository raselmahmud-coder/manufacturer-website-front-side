import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import { auth } from "../../firebase.init";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <h1 className="lg:text-4xl text-xl capitalize text-center mt-4">
        Welcome Back{" "}
        <span className="text-orange-400">{user?.displayName}</span> to your
        Dash Board
      </h1>
      <div className="courses-nav">
        {/* <Link to="/courses/list">List</Link> */}
      </div>
      <Outlet />
    </>
  );
};

export default DashBoard;
