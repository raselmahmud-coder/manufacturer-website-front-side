import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../firebase.init";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState({ isShow: false, id: "" });
  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      fetch(`http://localhost:5000/orders/${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          /* if (res.status === 400 || res.status === 401 || res.status === 403) {
              navigate("/");
              signOut(auth);
              localStorage.removeItem("accessToken");
            } */
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setMyOrders(data);
        });
    }
  }, [user?.email, navigate, myOrders.length]);

  //   console.log("table data", myOrders);
  if (loading) {
    return (
      <>
        <SpinnerCircular
          speed={150}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      </>
    );
  }
  const handleDelete = (e) => {
    //   console.log("got id",e);
    setShowConfirm({ isShow: true, id: e });
  };
  return (
    <>
      <h1 className="text-xl text-teal-300 text-center my-3 capitalize">
        You have order
        {myOrders.length > 1 && "s"}{' '}
        {myOrders.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Quantity Unit</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((order) => {
              return (
                <tr key={order._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-2">
                      <div>
                        <div className="font-bold capitalize">
                          {order?.productName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order.userEmail}
                    <br />
                  </td>
                  <td>{order?.quantity}</td>
                  <td>
                    $ {order?.productPrice}
                    <br />
                  </td>
                  <td>
                    {!order.paymentStatus ? (
                      <Link
                        to={`payment/${order?._id}`}
                        className="btn btn-secondary btn-xs"
                      >
                        UnPaid
                      </Link>
                    ) : (
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          checked="checked"
                          readOnly
                          className="checkbox checkbox-primary focus:outline-none hover:cursor-none"
                        />
                      </label>
                    )}
                  </td>
                  <td>
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(order._id)}
                    >
                      Cancel
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showConfirm.isShow && (
        <ConfirmDeleteModal
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          email={user?.email}
          setMyOrders={setMyOrders}
        />
      )}
    </>
  );
};

export default MyOrders;
