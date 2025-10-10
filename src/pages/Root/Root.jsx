import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import PageWrapper from "../../components/PageLoader/PageWrapper";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageWrapper>
        <Outlet></Outlet>
      </PageWrapper>
      <Footer></Footer>
    </div>
  );
};

export default Root;
