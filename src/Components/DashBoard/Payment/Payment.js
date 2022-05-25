import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { SpinnerCircular } from "spinners-react";
const stripePromise = loadStripe(
  "pk_test_51HOOgiJm9OErWZzlBMPnc8mHUiPluKuNyCZ6rbwwamXwxr5IjyBYPU2hsRqGyT6FCSj9LannpoMNdPG0jCqZZlk500JetbUqld"
);

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true);
    const url = `http://localhost:5000/order/${id}`;
    if (id) {
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOrder(data);
          setLoading(false);
        });
    }
  }, [id]);
  if (loading) {
    return (
      <>
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      </>
    );
  }
  return (
    <>
      <div className="grid lg:grid-cols-2 my-20">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Pay for {order?.productName}</h2>
            <p>
              Your order quantity
              <span className="text-purple-500"> {order?.quantity}</span>
            </p>
            <p>Payment : $ {order?.productPrice}</p>
          </div>
        </div>
        <div className="card shadow-xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckOutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
