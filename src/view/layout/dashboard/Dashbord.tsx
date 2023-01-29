import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashbord = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Dashbord;