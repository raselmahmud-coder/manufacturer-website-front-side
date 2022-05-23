import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";

const CheckOutForm = ({ appointment }) => {
  const { _id, price, patient, patientName } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const [loadingSpinner, setLoadingSpinner] = useState(false); 
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    setLoadingSpinner(true);
    if (price) {
      fetch(`http://localhost:5000/create-payment-intent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          setLoadingSpinner(false);
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    setLoadingSpinner(true);
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
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
            name: patientName,
            email: patient,
          },
        },
      });
    const payment = {
      appointment: _id,
      transactionId: paymentIntent.id,
    };
    if (intentError) {
      setLoadingSpinner(false);
      toast.error(`${intentError.message}`, {
        toastId: "strip-error",
      });
    } else {
      // payment success store on database
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoadingSpinner(false);
          toast.success(
            `Congrats! payment id is ${paymentIntent.id} please check your mail for details`,
            {
              toastId: "stripe-success",
              theme: "colored",
            }
          );
          navigate("/dashboard")
        });
    }
    event.reset();
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
