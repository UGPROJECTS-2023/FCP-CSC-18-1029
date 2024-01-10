import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Container;
