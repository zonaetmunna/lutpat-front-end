import React from "react";
import { Outlet } from "react-router-dom";
import SidebarTwo from "../components/dashboard/sidebar/SidebarTwo";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex h-screen">
        <SidebarTwo />
        <div className="flex-grow bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
