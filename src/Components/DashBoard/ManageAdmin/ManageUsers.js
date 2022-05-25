import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";

const ManageUsers = () => {
  const [loader, setLoader] = useState(false);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loader) {
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
  const handleForm = (e, email) => {
    setLoader(true)
    e.preventDefault();
    const option = e.target.selecting.value;
    if (option === "makeAdmin") {
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
            setLoader(false)
            refetch();
          }
        });
      } else if (option === "delete") {
    try {
      fetch(`http://localhost:5000/user/${email}`, {
        method:"delete",
        // headers: `Bearer ${localStorage.getItem("accessToken")}`, getting error
      })
      .then((res) =>res.json()).then(data => {
            if (data.acknowledged) {
              toast.success(`You have a user deleted`, {
                toastId: "user-deleted",
              });
              setLoader(false)
              refetch();
            }
        // console.log("de;ete", data);
        
      })
    } catch (error) {
      console.log("error",error);
    }
      console.log("for delete");
    }
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
                  <form onSubmit={(e) => handleForm(e, user.email)}>
                    <select
                      id="selecting"
                      className="select select-bordered w-1/2"
                    >
                      <option value="makeAdmin">Make Admin</option>
                      <option value="delete">Delete</option>
                    </select>
                    <button
                      type="submit"
                      className="w-1/5 lg:w-1/3 btn btn-primary"
                    >
                      Save
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
