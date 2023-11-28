import React from "react";
import { FaTruck, FaMoneyBill, FaGift } from "react-icons/fa";

const deliveryOptions = [
  {
    name: "Express Delivery",
    icon: FaTruck,
    color: "bg-blue-500",
  },
  {
    name: "Cash on Delivery",
    icon: FaMoneyBill,
    color: "bg-purple-500",
  },
  {
    name: "Gift Voucher",
    icon: FaGift,
    color: "bg-red-500",
  },
];

const DeleveryOption = () => {
  return (
    <div className="flex justify-center items-center">
      {deliveryOptions.map((option) => (
        <div
          key={option.name}
          className={`w-64 border rounded-lg p-4 mr-6 ${option.color} text-white flex items-center`}
        >
          <option.icon className="text-4xl mr-4" />
          <div className="text-xl font-medium">{option.name}</div>
        </div>
      ))}
    </div>
  );
};

export default DeleveryOption;
