import React from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './Main';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Main /> 
      </div>
      <Footer/>
    </>
  );
};

export default Layout;