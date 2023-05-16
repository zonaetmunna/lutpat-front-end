import React from "react";
import NavbarSeller from "../components/sellerDashboard/nav/NavbarSeller";
import SellerDashboardSidebar from "../components/sellerDashboard/sidebar/SellerDashboardSidebar";
import { Outlet } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div className="">
      {/* Navbar */}
      <NavbarSeller />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <SellerDashboardSidebar />

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

export default SellerDashboard;
