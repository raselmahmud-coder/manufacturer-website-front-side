import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";

const CheckOutForm = ({ order }) => {
  const { _id, productPrice, productId, productName, userName, userEmail } =
    order;
  const stripe = useStripe();
  const elements = useElements();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // setLoadingSpinner(true);
    if (productPrice) {
      console.log(productPrice, "price");
      fetch(`https://manufacturer-auto-parts.onrender.com/create-payment-intent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ productPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          console.log("expected client secret", data);
          setLoadingSpinner(false);
        });
    }
  }, [productPrice]);

  const handleSubmit = async (event) => {
    setLoadingSpinner(true);
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // each type of element.
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    //   confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });
    const payment = {
      transactionId: paymentIntent.id,
      paymentStatus: "pending",
    };
    if (intentError) {
      setLoadingSpinner(false);
      toast.error(`${intentError.message}`, {
        toastId: "strip-error",
      });
    } else {
      // payment success store on database
      fetch(`https://manufacturer-auto-parts.onrender.com/order/${_id}`, {
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
            elements.getElement(CardElement).clear();
            setLoadingSpinner(false);
            toast.success(
              `Payment is Success! Please check your mail for details`,
              {
                toastId: "stripe-success",
                theme: "colored",
              }
            );
            
              navigate("/dashboard/my-orders");
          }
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "blue",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "red",
            },
          },
        }}
      ></CardElement>
      {loadingSpinner ? (
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      ) : (
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-primary p-2 rounded"
        >
          Pay
        </button>
      )}
    </form>
  );
};

export default CheckOutForm;
