import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Container = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Container;
