import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

const Main = () => {
  return (
    <div>
      <Header/>
      <div>
      <Outlet />
    </div>
    </div>
    
  );
};

export default Main;