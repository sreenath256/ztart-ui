import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, LandHeader } from "../components";
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";

const UserLayout = () => {
  const location = useLocation();

  const showLandHeader =
    location.pathname.startsWith("/visa") ||
    location.pathname === "/visa-consultant-in-dubai";

  return (
    <div className="app">
      {showLandHeader ? <LandHeader /> : <Header />}
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
