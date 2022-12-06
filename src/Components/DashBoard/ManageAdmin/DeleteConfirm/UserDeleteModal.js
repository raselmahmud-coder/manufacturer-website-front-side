import React from "react";
import { toast } from "react-toastify";

const UserDeleteModal = ({
  setShowConfirm,
  setLoader,
  showConfirm,
  refetch,
}) => {
  // console.log("props", props);

  const handleDeleteConfirm = () => {
    setLoader(true);
    // ask delete confirm
    try {
      fetch(`https://manufacturer-auto-parts.onrender.com/user/${showConfirm?.email}`, {
        method: "delete",
        // headers: `Bearer ${localStorage.getItem("accessToken")}`, getting error
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(`You have a user deleted`, {
              toastId: "user-deleted",
            });
            setShowConfirm({ isShow: false});
            setLoader(false);
            refetch();
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-xl btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-red-500">
            Are You Sure? Want To Delete?
          </h3>
          <p className="py-4">Once delete you can not retrieve</p>
          <button className="btn" onClick={handleDeleteConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDeleteModal;
