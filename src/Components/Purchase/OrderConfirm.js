import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";
import { auth } from "../../firebase.init";

const OrderConfirm = ({ count, tool, setShowModal }) => {
  const { _id, name, price, quantity } = tool;
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  //   console.log("tool", tool);

  const handleConfirmOrder = (e) => {
    setLoading(true);
    e.preventDefault();
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    axios({
      method: "post",
      url: `http://localhost:5000/order`,
      data: {
        productId: _id,
        productName: name,
        productPrice: price,
        quantity: count,
        userName: user.displayName,
        userEmail: user.email,
        address: address,
        phone: phone,
        paymentStatus: "",
      },
      headers: { Authorization: "Bearer ..." },
    }).then((res) => {
      if (res.data.acknowledged) {
        const afterOrderQuantity = quantity - count;
        axios
          .put(`http://localhost:5000/tool/${_id}`, {
            quantity: afterOrderQuantity,
          })
          .then((res) => {
            if (res.data.acknowledged) {
              setLoading(false);
              setShowModal(false);
              toast.success(
                `Order is init to precessed Please payment complete`,
                {
                  toastId: "order-done",
                }
              );
            }
          });
      }
    });
  };
  return (
    <>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative w-1/2">
          <label htmlFor="order-modal" className="btn absolute right-3 top-3">
            ✕
          </label>
          <form className="p-9" onSubmit={handleConfirmOrder}>
            <input
              type="text"
              value={`Product Name ${name}`}
              disabled
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            <input
              type="text"
              value={`Product Id ${_id}`}
              disabled
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            <input
              type="text"
              value={`Price $ ${price}`}
              disabled
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            <input
              type="text"
              value={`Order Quantity ${count}`}
              disabled
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            <input
              type="text"
              value={`Your Name ${user.displayName}`}
              disabled
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            <input
              type="text"
              value={`Your Email ${user.email}`}
              disabled
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            <input
              name="address"
              type="text"
              placeholder="Address"
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="mb-2 rounded w-full text-green-400 text-[16px]"
            />
            {loading ? (
              <SpinnerCircular
                speed={120}
                color={"#0FCFEC"}
                style={{ margin: "0px auto", display: "block" }}
              />
            ) : (
              <button type="submit" className="btn bg-orange-400">
                "Confirm Order"
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;
