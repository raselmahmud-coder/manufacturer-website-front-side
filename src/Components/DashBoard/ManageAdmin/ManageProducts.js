import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../../firebase.init";
import ProductDeleteConfirm from "./DeleteConfirm/ProductDeleteConfirm";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const [loader, setLoader] = useState(false);
  const [showConfirm, setShowConfirm] = useState({ isShow: false, id: "" });
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch(`https://auto-parts-rm.herokuapp.com/tools`, {
      /*  method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }, */
    }).then((res) => res.json())
  );
  if (isLoading || loader) {
    return (
      <div className="flex justify-center">
        <SpinnerCircular
          thickness={120}
          color={"#0FCFEC"}
          speed={200}
          size={80}
        />
      </div>
    );
  }

  const handleEditTool = (_id) => {
    // setLoader(true);
    const payment = { paymentStatus: "shipped" };
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("expecter order update info", data);
        if (data.acknowledged) {
          refetch();
          setLoader(false);
          toast.success(`Payment status is updated`, {
            toastId: "success",
          });
        }
      });
  };
  // for delete handle
  const handleDeleteTool = (id) => {
    setShowConfirm({ isShow: true, id: id });
  };
  return (
    <>
      <h1 className="text-3xl my-5 text-center">
        Manage Orders {tools?.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Available Q</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool) => (
              <tr key={tool._id}>
                <td>
                  <img src={tool?.image} className="w-1/5 p-0 m-0" alt="" />
                </td>
                <td>{tool?.name}</td>
                <td>{tool?.quantity}</td>
                <td>$ {tool?.price}</td>
                <td>{tool?.description.slice(0,7)}...</td>
                <td>
                  <button
                    onClick={() =>
                      handleEditTool(tool._id, tool?.transactionId)
                    }
                    className="w-1/5 lg:w-1/3 btn btn-primary mr-2"
                  >
                    Edit
                  </button>
                  <label
                    htmlFor="my-modal-3"
                    className="w-1/5 lg:w-1/3 btn bg-red-500 ml-2"
                    onClick={() => handleDeleteTool(tool._id)}
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
        <ProductDeleteConfirm
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          refetch={refetch}
          loader={loader}
          setLoader={setLoader}
        />
      )}
    </>
  );
};

export default ManageProducts;
