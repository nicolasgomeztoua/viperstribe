import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer"
const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
