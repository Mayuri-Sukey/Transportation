import React from 'react';
import Footer from './Footer';
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
