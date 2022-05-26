import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../../firebase.init";
import OrderDeleteConfirm from "./DeleteConfirm/OrderDeleteConfirm";
// import DeleteConfirmation from "./DeleteConfirmation";

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  const [loader, setLoader] = useState(false);
  const [showConfirm, setShowConfirm] = useState({ isShow: false, id: "" });
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/admin-orders/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
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

  const handleShipped = (_id, transactionId) => {
    setLoader(true);
    // payment status update  and store on database
    const payment = { paymentStatus: "shipped", transactionId: transactionId };
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
  const handleDelete = (id) => {
    setShowConfirm({ isShow: true, id: id });
  };
  return (
    <>
      <h1 className="text-3xl my-5 text-center">
        Manage Orders {orders?.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Payment</th>
              <th>TRX ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id}>
                <td>{order?.userName}</td>
                <td>{order?.email}</td>
                <td>{order?.productName}</td>
                <td>
                  {order?.paymentStatus ? order?.paymentStatus : "UnPaid"}
                </td>
                <td>{order?.transactionId}</td>
                <td>
                  <button
                    disabled={order?.paymentStatus === "shipped"}
                    onClick={() =>
                      handleShipped(order._id, order?.transactionId)
                    }
                    className="w-1/5 lg:w-1/3 btn btn-primary"
                  >
                    Shipped
                  </button>
                  <label
                    disabled={order?.paymentStatus === "pending"}
                    htmlFor="my-modal-3"
                    className="w-1/5 lg:w-1/3 btn bg-red-500"
                    onClick={() => handleDelete(order._id)}
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
        <OrderDeleteConfirm
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

export default ManageOrders;
