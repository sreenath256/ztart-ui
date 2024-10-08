import React from "react";
import { allvisaData } from "../../components/Constant";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const VisaGrid = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Best Visa Agency In Dubai, Visa Assistance In Dubai UAE</title>
        <meta
          name="description"
          content="Best Visa Agency in Dubai: Offering expert visa assistance for tourists and businesses
 in Dubai, UAE. Trust us for a smooth and efficient visa process."
        />
        <link rel="canonical" href="https://ztartvisa.com/about" />
      </Helmet>
      <div className="container mx-auto  py-8 ">
        <h1 className=" text-2xl lg:text-6xl font-PoppinsExtraBold text-center px-3 md:px-0  mt-20 text-visaclr">
          Popular Visas
          <span className="text-black text-3xl md:text-6xl"> from UAE</span>
        </h1>
        <p className="pb-10 text-base lg:text-2xl font-PoppinsRegular  text-center px-3 pt-5 md:px-0">
          Your First Choice for the Most Requested Visas
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">
          {allvisaData.map((visa, index) => {
            console.log(visa);

            return (
              <div
                key={index}
                className="bg-white rounded-lg  shadow-md overflow-hidden "
              >
                <img
                  src={visa.Imgs}
                  alt={visa.alttext}
                  className="w-full h-48 sm:h-52 md:h-56 object-left-bottom object-cover cursor-pointer"
                />
                <div className="p-4">
                  <h2 className="md:text-xl font-semibold mb-2 ">
                    {visa.alttext}
                  </h2>
                  <button
                    onClick={() => navigate(`/visa/${visa.url}`)}
                    className=" bg-visaclr font-PoppinsMedium px-2 text-sm py-1 rounded-lg text-white w-fit"
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VisaGrid;
