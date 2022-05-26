import React from "react";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";

const ProductDeleteConfirm = ({
  setShowConfirm,
  showConfirm,
  refetch,
  loader,
  setLoader,
}) => {
  console.log("props", showConfirm);

  const handleDeleteConfirm = () => {
    setLoader(true);
    // ask delete confirm
    try {
      fetch(`https://auto-parts-rm.herokuapp.com/tool/${showConfirm?.id}`, {
        method: "delete",
        // headers: `Bearer ${localStorage.getItem("accessToken")}`, getting error
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setLoader(false);
            setShowConfirm({ isShow: false });
            refetch();
            toast.success(`You have a tool deleted`, {
              toastId: "tool-deleted",
            });
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
          {loader ? (
            <div className="flex justify-center">
              <SpinnerCircular
                thickness={120}
                color={"#0FCFEC"}
                speed={200}
                size={80}
              />
            </div>
          ) : (
            <button className="btn" onClick={handleDeleteConfirm}>
              Confirm
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDeleteConfirm;
