import React from "react";
import TotalRevenue from "../../../components/dashboard/dashboardDefault/TotalRevenue";
import TotalOrder from "../../../components/dashboard/dashboardDefault/TotalOrder";
import TodayRevenue from "../../../components/dashboard/dashboardDefault/TodayRevenue";
import TotalStore from "../../../components/dashboard/dashboardDefault/TotalStore";
import ChartSalesHistory from "../../../components/dashboard/dashboardDefault/ChartSalesHistory";

const DashboardDefault = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <TotalRevenue />
        </div>
        <div className="col-span-1">
          <TotalOrder />
        </div>
        <div className="col-span-1">
          <TodayRevenue />
        </div>
        <div className="col-span-1">
          <TotalStore />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <ChartSalesHistory /> */}
      </div>
    </div>
  );
};

export default DashboardDefault;
