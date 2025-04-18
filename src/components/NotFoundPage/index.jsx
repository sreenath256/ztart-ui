import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <h1>404 - Page not found</h1>
        <p>The page you are looking for does not exits.</p>
      </Helmet>

      <div className="w-full h-[calc(100vh-80px)] grid place-items-center">
        <div className="comming-wrapper  grid place-items-center">
          <h1 className="animate-bounce text-3xl md:text-6xl font-bold">
            Page Not Found<span className="dot">.</span>
          </h1>
          <Link to="/">
            <button className="mt-5 bg-gradient-to-r from-visaclr to-[#1a4442] hover:border-4 border-visaclr duration-200 text-white px-5 py-2 text-base capitalize cursor-pointer">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
