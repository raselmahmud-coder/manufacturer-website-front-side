import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../../firebase.init";
import logo from "../../../images/logo.png";
const NavBarAutoParts = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  // console.log("from nav bar", user?.photoURL);
  // console.log(error);
  if (error) {
    toast.error(`from nav ${error}`, {
      toastId: "nav-error",
    });
  }
  const handleLogOut = async () => {
    await signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  const menu = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About Us</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      {loading && (
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      )}
      {!user && (
        <li>
          <Link to={"/log-in"}>Log In</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="5" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="4"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <img className="rounded bg-slate-200 p-2" src={logo} alt=".." />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </label>
              <div
                tabIndex="1"
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {user && (
              <div className="mx-4 dropdown dropdown-end">
                <label tabIndex="2" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : `https://api.lorem.space/image/face?hash=33791`
                      }
                      alt="profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex="3"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
                >
                  <li>
                    <Link
                      to={"/dashboard"}
                      className="justify-between border-2 border-lime-400 rounded-lg mt-2"
                    >
                      Dash Board
                    </Link>
                  </li>
                  <li className="justify-between border-2 border-lime-400 rounded-lg mt-2">
                    <Link to="/dashboard/my-orders">My Orders</Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/view-profile"}
                      className="justify-between border-2 border-lime-400 rounded-lg mt-2"
                    >
                      View Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li className="mt-2 border-2 border-lime-400 rounded-lg capitalize">
                    <span>{user?.displayName || "Doesn't Provide name"}</span>
                  </li>
                  <li className="mt-2 border-2 border-lime-400 rounded-lg capitalize">
                    <span>{user?.email}</span>
                  </li>
                  <li className="mt-2 border-2 border-lime-400 rounded-lg">
                    <span onClick={handleLogOut}>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarAutoParts;
