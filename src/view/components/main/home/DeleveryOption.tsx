import React from "react";

type DeliveryOption = {
  name: string;
  image: string;
};

const deliveryOptions: DeliveryOption[] = [
  {
    name: "Express Delivery",
    image: "/images/express-delivery.svg",
  },
  {
    name: "Cash on Delivery",
    image: "/images/cash-on-delivery.svg",
  },
  {
    name: "Gift Voucher",
    image: "/images/gift-voucher.svg",
  },
];

const DeleveryOption = () => {
  return (
    <div className="flex justify-center items-center">
      {deliveryOptions.map((option) => (
        <div
          key={option.name}
          className="w-64 border rounded-lg p-4 mr-6 bg-gray-100"
        >
          <img src={option.image} alt={option.name} className="h-8 w-8 mr-2" />
          <div className="text-lg font-medium text-gray-700">{option.name}</div>
        </div>
      ))}
    </div>
  );
};

export default DeleveryOption;
