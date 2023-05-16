import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setShippingCost,
  setShippingOption,
  setTotal,
} from "../../../features/cart/cartSlice";
import { AppDispatch } from "../../../app/store";

const ShippingOption = ({ shippingCost }: { shippingCost: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleShippingOptionChange = (option: string, cost: number) => {
    dispatch(setShippingOption(option));
    dispatch(setShippingCost(cost));
    dispatch(setTotal());
  };
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold">Shipping:</span>
        <span className="text-lg font-bold">${shippingCost}</span>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold mb-2">
          Choose a shipping option:
        </label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            name="shippingOption"
            value="Free Shipping"
            onChange={() => handleShippingOptionChange("Free Shipping", 0)}
            className="mr-2"
          />
          <span>Free Shipping +$0.00</span>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            name="shippingOption"
            value="Flat Rate"
            onChange={() => handleShippingOptionChange("Flat Rate", 10)}
            className="mr-2"
          />
          <span>Flat Rate +$10.00</span>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="shippingOption"
            value="Local Delivery"
            onChange={() => handleShippingOptionChange("Local Delivery", 5)}
            className="mr-2"
          />
          <span>Local Delivery +$5.00</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingOption;
