import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/main/common/Header";
import Footer from "../components/main/common/Footer";
import Chatbot from "../components/common/Chatboat/Chatbot";

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      {/* <div>
        <Chatbot />
      </div> */}

      <Footer />
    </div>
  );
};

export default Main;
