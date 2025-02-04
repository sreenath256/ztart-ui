import React, { useEffect, useRef, useState } from "react";
import {
  VisaLogo,
  baan22,
  bann1,
  bann2,
  bann3,
  stand1,
  stand2,
  stand3,
  stand4,
  bann4,
  bann5
} from "../assets";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {
  FastReliable,
  HowweStand,
  NewFaq,
  Newvisa,
  Testimonial2,
  Whyztarts,
  Footer,
  NewHeader
} from "../components";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";



const test2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const images = [bann4, bann5];

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  // Change image with buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <NewHeader/>

      <section className=" w-11/12 mx-auto mt-16 md:mt-5 rounded-xl overflow-hidden bg-white h-full xl:h-screen flex flex-col-reverse md:flex-row gap-5">
        <div className="basis-1/2 md:basis-3/5 px-2 md:py-20 xl:pl-32 xl:pr-20 md:col-span-3 flex flex-col gap-5 items-center text-center justify-center h-full w-full bg-white">
          <h1 className="text-3xl xl:text-6xl font-PoppinsSemibold capitalize">
            Quick and Timely
            <br /> visa Approvals
          </h1>
          <p className="text-sm md:text-sm leading-loose">
            Your journey can be easier and more convenient with the best visa
            services in Dubai. We provide fast, hassle-free processing to help
            you get the right visa quickly. Let us take care of everything, so
            you can focus on what matters.
          </p>
          <form className="relative text-black overflow-hidden border border-visaclr rounded-full w-full md:w-[80%] 2xl:w-[70%]  xl:mt-5">
            <input
              className="w-full p-3 xl:p-4 outline-none pr-20 xl:pr-52"
              type="number"
              placeholder="Mobile number"
              inputMode="numeric"
              min="0"
            />
            <button
              className="uppercase bg-visaclr hover:bg-visaclrhvr duration-200 text-white w-fit text-[10px] sm:text-xs md:text-sm font-PoppinsMedium px-3 xl:px-5 h-[80%] absolute right-1.5 top-[50%] -translate-y-[50%] rounded-full"
              type="submit"
            >
              Get Free Assistance
            </button>
          </form>

          <div className="flex items-center gap-16 -mb-20 mt-5">
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-mono font-semibold">100k</h4>
              <p className="text-[12px]">Lorem, ipsum.</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-mono font-semibold">100%</h4>
              <p className="text-[12px]">Lorem, ipsum.</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-mono font-semibold">100+</h4>
              <p className="text-[12px]">Lorem, ipsum.</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 md:basis-2/5 rounded-3xl overflow-hidden h-full w-full relative shadow-lg">
          {/* Buttons */}
          <div className="absolute bottom-5 right-5 flex gap-3 z-10">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-visaclr hover:text-white duration-150 rounded-lg md:rounded-xl w-8 h-8 md:w-10 md:h-10 grid place-items-center"
            >
              <MdKeyboardArrowLeft className="text-2xl md:text-3xl" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white hover:bg-visaclr hover:text-white duration-150 rounded-lg md:rounded-xl w-8 h-8 md:w-10 md:h-10 grid place-items-center"
            >
              <MdKeyboardArrowRight className="text-2xl md:text-3xl" />
            </button>
          </div>

          {/* Image */}
          <img
            className="relative md:absolute h-[500px] md:h-full top-0 left-0 w-full object-cover transition-opacity duration-1000"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            loading="lazy"
          />
        </div>
      </section>

      <Newvisa />

      <HowweStand />

      <FastReliable />

      <Whyztarts />

      <section className="w-11/12 xl:w-10/12 mx-auto relative rounded-3xl overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src={bann1}
          alt=""
        />
        <div className="bg-[#0000008b] absolute w-full h-full"></div>
        <div className="relative text-white flex flex-col gap-5 items-center justify-center text-center py-12 xl:py-32 w-[80%] mx-auto">
          <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">
           Simplifying Your Visa Journey
          </h4>
          <p className="text-xs xl:text-base">
              Tired of waiting and dealing with confusing visa steps? At Ztartvisa, we provide the best visa services in Dubai, making the process fast and simple. Our expert team helps you with every step to get your tourist or visit visa approved quickly and easily. Apply now for a stress-free experience.
          </p>
          <button className="bg-white text-black px-5 shadow-xl py-3 text-sm font-PoppinsMedium rounded-full">
          Contact Now
          </button>
        </div>
      </section>

      <section className="w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20">
        <div className=" relative  text-center">
          <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">
            What Our <span className="text-visaclr">Client's Say</span>
          </h4>
          <div className="flex flex-col items-center gap-1 mt-5">
            <p className="text-center text-sm lg:text-base">
              Trusted by thousands with a perfect 5-star Google rating. Your
              journey is our priority!
            </p>
            <span className="flex items-center text-3xl text-yellow-400">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </span>
            {/* <img loading='lazy' className='h-10 w-36' src={Trustpilotgoogle} alt="image" />
          <p className='text-center text-base'>Based on 1,393+ reviews Trustpilot & Google</p> */}
            <span className="flex gap-5 items-center text-2xl text-yellow-400">
              <FcGoogle />
            </span>
          </div>
        </div>
        <Testimonial2 />
      </section>

      <NewFaq />

      <section className="w-11/12 xl:w-10/12 mx-auto relative rounded-3xl overflow-hidden xl:mb-10">
        <img
          className="absolute object-center w-full h-full object-cover"
          src={baan22}
          alt=""
        />
        <div className="bg-[#00000066] absolute w-full h-full"></div>
        <div className="relative text-white flex flex-col gap-5 items-start justify-end pt-52 pb-5 md:pt-52 p-5 md:p-10 xl:pb-20 xl:w-[60%]">
          <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">
            Get in touch with our expert consultants
          </h4>
          <p className="text-sm md:text-base">
            We have customized our Visa services in dubai to support your travel
            plans. Reach out to us for a smooth and efficient tourist or visit
            visa process.
          </p>
          <button className="bg-white text-black px-5 shadow-xl py-3 text-sm font-PoppinsMedium rounded-full">
            GET YOUR VISA NOW, FAST & EASY!
          </button>
        </div>
      </section>
      <section className="-mb-10">
        <Footer/>
      </section>
      
    </>
  );
};

export default test2;
