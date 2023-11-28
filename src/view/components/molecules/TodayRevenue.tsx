import React, { useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";

const TodayRevenue = () => {
  const [todayRevenue, setTodayRevenue] = useState(0);

  useEffect(() => {
    setTodayRevenue(todayRevenue);
  }, []);
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex items-center mb-2">
        <FiDollarSign className="text-gray-500 mr-2" />
        <h2 className="text-lg font-medium text-gray-800">Today's Revenue</h2>
      </div>
      <p className="text-4xl font-bold text-green-500">${todayRevenue}</p>
    </div>
  );
};

export default TodayRevenue;
