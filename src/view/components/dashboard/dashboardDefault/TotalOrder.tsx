import React, { useEffect, useState } from "react";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

const TotalOrder = () => {
  const [totalOrder, setTotalOrder] = useState(0);

  useEffect(() => {
    // In this example, we are just setting the total order count to a static value of 10
    setTotalOrder(10);
  }, []);
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex items-center mb-2">
        <FaShoppingBag className="text-gray-500 mr-2" />
        <h2 className="text-lg font-medium text-gray-800">Total Orders</h2>
      </div>
      <p className="text-4xl font-bold text-blue-500">{totalOrder}</p>
    </div>
  );
};

export default TotalOrder;
