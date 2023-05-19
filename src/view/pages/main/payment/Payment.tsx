import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { Elements } from "@stripe/react-stripe-js";
import StripePayment from "../../../components/main/checkout/StripePayment";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51N94PxDWFXHG6ou173iNHT39bxat6wJIpxVrBtfSPv9xWUktk7f1UBZvcm6Pafy2In8hJlDK7TT5GIIRR7gw0Qra008NIHcADl"
);

const Payment = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
    defaultValue: "",
  });

  const { cart, total, subtotal } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <div className="container mx-auto py-10 px-10">
      <div className="flex justify-between px-5">
        <div className="w-1/2 p-4 bg-gray-100 mx-5 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Payment Method</h3>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              {...register("paymentMethod")}
              id="bkas"
              className="mr-2"
              value="bkas"
            />
            <label htmlFor="bkas" className="font-medium">
              bkas
            </label>
          </div>
          {/* Cash on Delivery radio button */}
          <div className="flex items-center mb-4">
            <input
              type="radio"
              {...register("paymentMethod")}
              id="cashOnDelivery"
              className="mr-2"
              value="cashOnDelivery"
            />
            <label htmlFor="cashOnDelivery" className="font-medium">
              Cash on Delivery
            </label>
          </div>
          {/* Credit/Debit Cards or Stripe radio button */}
          <div className="flex items-center mb-4">
            <input
              type="radio"
              {...register("paymentMethod")}
              id="Stripe"
              className="mr-2"
              value="Stripe"
            />
            <label htmlFor="Stripe" className="font-medium">
              Stripe
            </label>
          </div>
          {paymentMethod === "Stripe" && (
            <Elements stripe={stripePromise}>
              <StripePayment paymentMethod={paymentMethod.stripe} />
            </Elements>
          )}
        </div>
        <div className="w-1/2 p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center py-2"
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-gray-600">${item.price.toFixed(2)}</div>
              <div className="text-gray-600">x {item.quantity}</div>
            </div>
          ))}
          <div className="border-t-2 border-gray-200 py-2">
            <div className="flex justify-between items-center font-semibold">
              <div>Total:</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
