import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import {
  usePostOrderMutation,
  usePostPaymentMutation,
} from "../../../../features/order/orderApi";

const StripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useSelector((state: RootState) => state.auth);
  const { cart, total } = useSelector((state: RootState) => state.cart);

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  /*  const [postPayment, { data }] = usePostPaymentMutation();
  // postPayment(total.toFixed(0)); */
  // const clientSecret = data.client_secret;

  const [postOrder] = usePostOrderMutation();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5001/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, [total]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message || "");
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message ?? "");
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        totalAmount: total,
        transactionId: paymentIntent.id,
        user: user?._id,
        products: cart,
      };
      postOrder(payment);
      setSuccess("Congrats! your payment completed");
      setTransactionId(paymentIntent.id);
    }
    setProcessing(false);
  };

  return (
    <div>
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label
            htmlFor="cardElement"
            className="block text-gray-700 font-bold mb-2"
          >
            Card Details
          </label>
          <CardElement
            id="cardElement"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className={`text-sm mt-4 px-4 py-2 rounded bg-blue-500 text-white ${
            !stripe || !clientSecret || processing
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default StripePayment;
