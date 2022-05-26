import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import UserDeleteModal from "./DeleteConfirm/UserDeleteModal";

const ManageUsers = () => {
  const [loader, setLoader] = useState(false);
  const [showConfirm, setShowConfirm] = useState({ isShow: false, email: "" });
  const {
    data: users,
    isLoading,
    refetch,
    status
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loader || status.loading) {
    return (
      <>
        <div className="flex justify-center">
          <SpinnerCircular
            thickness={120}
            color={"#0FCFEC"}
            speed={200}
            size={80}
          />
        </div>
      </>
    );
  }
  // for delete handle
  const handleDelete = (email) => {
    setShowConfirm({ isShow: true, email: email });
  };
  // for make admin handle
  const handleMakeAdmin = (email) => {
    setLoader(true);
    console.log("for admin");
    axios
      .patch(`http://localhost:5000/user/${email}`, {
        headers: `Bearer ${localStorage.getItem("accessToken")}`,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success(`You have a new admin`, {
            toastId: "new-admin",
          });
          setLoader(false);
          refetch();
        }
      });
  };

  return (
    <>
      <h1 className="text-2xl text-purple-300 uppercase text-center my-3">
        Manage Users {users?.length}
      </h1>
      <div className="mx-auto w-10/12 my-6">
        <table className="table lg:w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user?.role ? user.role : "User"}</td>
                <td>
                  <button
                    disabled={user?.email === "raselmahmud98262@gmail.com" || user.role === 'admin'}
                    onClick={() => handleMakeAdmin(user.email)}
                    className="w-1/5 lg:w-1/3 btn btn-primary"
                  >
                    Make Admin
                  </button>
                  <label
                    disabled={user?.email === "raselmahmud98262@gmail.com"}
                    htmlFor="my-modal-3"
                    className="w-1/5 lg:w-1/3 btn bg-red-500"
                    onClick={() => handleDelete(user.email)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showConfirm.isShow && (
        <UserDeleteModal
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          setLoader={setLoader}
          loader={loader}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default ManageUsers;
