import React, { useEffect, useState } from "react";
import { FaStore } from "react-icons/fa";

const TotalStore = () => {
  const [totalStores, setTotalStores] = useState(0);

  useEffect(() => {
    // fetch total stores data from API or database

    setTotalStores(totalStores);
  }, []);
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex items-center mb-2">
        <FaStore className="text-gray-500 mr-2" />
        <h2 className="text-lg font-medium text-gray-800">Total Stores</h2>
      </div>
      <p className="text-4xl font-bold text-blue-500">{totalStores}</p>
    </div>
  );
};

export default TotalStore;
