import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Header1 from "../Layouts/Header1"
import Header3 from './Header3';
import Header4 from './Header4';


const Layout = ({ children}) => {
  return (
    <>
      <Header4  /> 
      {/* <Header1 ></Header1> */}
      {/* <Header3/> */}
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
