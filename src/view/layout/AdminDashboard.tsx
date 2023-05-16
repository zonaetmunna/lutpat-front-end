import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/sidebar/DashboardSidebar";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";

const AdminDashboard = () => {
  return (
    <div className="">
      {/* Navbar */}
      <DashboardNavbar />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Content */}
        <main className="flex-grow bg-gray-100 p-6">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
