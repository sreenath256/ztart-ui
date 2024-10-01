import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  InsatProf,
  insatsvg,
  relaxImg,
  relaxImg2,
  Trustpilotgoogle,
  ztartnews,
  PriceComp,
  ztartoffice,
  Scn1,
  diamondsvg,
  sheildsvg,
  heartsvg,
  Grp2,
  Grp3,
  Grp4,
  Buddy,
  Solutions,
  Savemoney,
  spainVisa,
  uk1Prt,
} from "../assets";
import {
  TravelCarousal,
  BetterDeal,
  Testimonial,
  Demo,
  VisaImageCarousal,
  InsatFeed
} from "../components";
import { TiTick } from "react-icons/ti";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaArrowUp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";


const LandFAQ = [
  {
    question: `What are the benefits of working with a visa consultant in Dubai?`,
    answer: `By working with our agency, you can benefit from our expertise, save time
    and effort, and increase your chances of obtaining your visa.`,
  },
  {
    question: `What is the best way to find a reliable visa consultant in Dubai?`,
    answer: `Research and read reviews from previous clients to find a trustworthy visa
    consultant in Dubai.`,
  },
  {
    question: `What makes Ztartvisas' visa consultant in Dubai different from others?`,
    answer: `Years of expertise and an excellent reputation in helping customers secure
    visas are attributes of our team of knowledgeable visa advisors at Ztartvisas,
    makes us a trusted and reliable visa consultant in Dubai.`,
  },
  {
    question: `What documents do I need to provide to a visa consultant in Dubai?`,
    answer: `Required documents vary depending on the type of visa and the country of
    destnation.`,
  },
  {
    question: `How can a visa consultant in Dubai help me with my visa application if I
    have a complex case?`,
    answer: `Experienced consultants can provide personalized guidance and
    representation for complex cases, increasing the chances of success.`,
  },
  {
    question: `How do I know if I need a visa to travel to my destination, and how can a
    visa consultant in Dubai help?`,
    answer: `Check the entry requirements for your destination country, and consult with
    a visa consultant in Dubai for guidance and assistance.`,
  },
  {
    question: `What are the benefits of approaching with a registered visa consultant in Dubai?`,
    answer: `Registered consultants are authorized and experienced, providing peace of
    mind and increasing the chances of successful visa applications.`,
  },


]

function Homepage() {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const modalRef = useRef(null);
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  const [formData, setFormData] = useState({
    customerName: "",
    mobileNo: "",
    countryId: "",
  });
  

  // Update form state based on input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const mobileNumberWithZero = "0" + formData.mobileNo;
    try {
      const response = await fetch(
        "https://lead.accorelab.com/api/Lead/Create/LeadAutoCustomer",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            ClientKey: "AcrelbKey", // Replace 'xxxxxxx' with your actual ClientKey
            ClientValue: "Xjr@5j%787gfounS10", // Replace 'xxxxxxx' with your actual ClientValue
          },
          body: JSON.stringify({
            customerName: formData.customerName,
            mobileNo: mobileNumberWithZero,
            countryId: formData.countryId, // Assuming countryId is always 4 as per your example
          }),
        }
      );

      if (!response.ok) {
        toast.error("Please fill out all fields to proceed")
        throw new Error("Something went wrong");
      }

      const data = await response.json(); // Assuming the server responds with JSON
      toast.dark("Submission Successful")
      setFormData({
        customerName: "",
        mobileNo: "",
        countryId: "",
      })

      console.log("Submission Successful", data);
      // Here you could clear the form or give feedback to the user
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 360);
    };

    const handleOutsideClick = (event) => {
      // Check if the click is outside the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Close the modal
        setOpen(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://lead.accorelab.com/api/Country/List",
          {
            method: "GET",
            headers: {
              ClientKey: "AcrelbKey",
              ClientValue: "Xjr@5j%787gfounS10",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 200 && data.result) {
          setCountries(data.result);
        } else {
          setError(data.errorMessage || "Failed to fetch countries");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);


  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
  
    return (
      <div className="">
        <div
          className={`flex gap-x-10  ${isOpen ? 'bg-white' : 'bg-white'} rounded-md md:gap-x-0  justify-between items-center  pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
          onClick={toggleOpen}
        >
          <div className="font-PoppinsMedium text-sm md:text-base pl-5">{question}</div>
          <div
            className={`transform transition-transform ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          >
           <FiPlus/>
          </div>
        </div>
        <div
          className={`bg-white px-5 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className='p-4 pl-0 text-sm font-PoppinsRegular' >{answer}</p>
        </div>
      </div>
    );
  };

  
  return (
    <>
      <Helmet>
        <title>Best Visa Services In Dubai UAE, Visa agents In Dubai UAE</title>
        <meta name="description" content="Best visa services in Dubai UAE. Expert visa agents in Dubai. We simplify tourist and business visa service in Dubai UAE ensuring a smooth and Steady process." />
      </Helmet>
      <main className="w-11/12 md:w-11/12 xl:w-9/12 mx-auto h-full">
        {/* Banner */}
        <section className="px-2 md:px-0 w-full h-full">
          <div className="pt-8 lg:pt-24  text-center xs:text-[40px] sm:text-[47px] md:text-5xl lg:text-7xl xl:tracking-wider font-PoppinsBold xl:font-PoppinsExtraBold">
            <h2 className="leading-none">
            Visa on Time,<br/> Guaranteed
              <br className="hidden md:block" />
            </h2>
           <h1 className="text-base font-PoppinsRegular tracking-normal pb-2">Visa Services in Dubai</h1>
          </div>
          <p className="text-center text-sm md:text-base pt-2 px-9 md:px-0 xl:px-40">
          Let Ztartvisa handle it
          for a happy journey. Our expert team will guide you through the process,
          ensuring your visa application is submitted correctly and processed efficiently.
          </p>
          {/* ---FORM---- */}
          <form
            onSubmit={handleSubmit} // Add form submission handler
            ref={modalRef}
            className="w-[95%] mx-auto fixed left-0 right-0 top-16 lg:top-20  bg-white z-20  px-3 py-2 flex flex-col gap-y-5 xl:hidden"
          >
            <span
              className={` ${
                isSticky
                  ? "flex outline outline-1 outline-gray-300  text-sm items-center justify-center gap-x-3 py-4 rounded-xl font-PoppinsRegular tracking-wide transition-all duration-150"
                  : "hidden"
              }`}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <span className="flex items-center gap-2">
                  <p>Close</p>
                  <IoCloseSharp className="text-xl text-visaclr" />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <p>Start application</p>
                  <IoSendSharp className="text-xl text-visaclr" />
                </span>
              )}
            </span>
            {/* pop */}
            <div
              className={`${
                open
                  ? "flex flex-col gap-3 transition-all duration-100 ease-in"
                  : "hidden"
              } `}
            >
              <div className="outline outline-1 outline-gray-300 overflow-hidden rounded-2xl">
                <div className="relative w-full">
                  <input
                    className="w-full focus:outline-none py-4 lg:py-2.5 px-4 pl-11 border-b-[1px] lg:border-b-0 lg:border-r-2"
                    type="text"
                    placeholder="Name"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange} // Bind change handler
                    required
                  />
                  <AiOutlineUser className="absolute top-[14px] left-3 text-2xl text-gray-700" />
                </div>
                <div className="relative w-full">
                  <input
                    className="w-full focus:outline-none py-4 lg:py-2.5 px-4 pl-[85px] border-b-[1px] lg:border-b-0 lg:border-r-2 [&::-webkit-inner-spin-button]:appearance-none"
                    type="tel"
                    inputMode="numeric"
                    placeholder="58 550 3940"
                    pattern="[0-9]{9}"
                    title="Please enter a 9-digit number" 
                    name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange} // Bind change handler
                required
                  />
                  <p className="absolute left-9 top-[14.5px] chfont font-medium">+971</p>
                  <HiOutlineDevicePhoneMobile className="absolute top-4 left-3 text-2xl text-gray-700" />
                </div>
                <div className="relative w-full">
                <select className="w-fit py-4 lg:py-2.5 pl-11 outline-none appearance-none"
             name="countryId"
             value={formData.countryId}
             onChange={handleChange} // Bind change handler
             required>
             <option value="">Select a location</option>
                  {countries.map((country) => (
                    <option key={country.countryId} value={country.countryId}>
                      {country.countryName}
                    </option>
                  ))}
             </select>
                  <IoLocationOutline className="absolute top-[14px] left-3 text-2xl text-gray-700" />
                </div>
              </div>
              <button
                className="bg-visaclr hover:bg-white border border-visaclr hover:text-visaclr py-4 duration-200 rounded-xl text-white text-base font-PoppinsSemibold"
                type="submit"
              >
                Get started!
              </button>
            </div>
            {/* pop */}
          </form>
          {/* ---main FORM---- */}
          <form
            className={`${
              isSticky
                ? "opacity-0"
                : "grid grid-cols-1 lg:grid-cols-6 gap-5 mt-10"
            }  bg-white`}
            onSubmit={handleSubmit} // Add form submission handler
          >
            <div className="lg:col-span-5 flex flex-col md:flex-row outline outline-1 outline-gray-300 overflow-hidden  md:p-2  rounded-xl">
              <div className="relative w-full">
                <input
                  className="w-full focus:outline-none py-4 lg:py-2.5 px-10 md:px-10 lg:px-9 border-b-[1px] md:border-b-0 md:border-r-2"
                  type="text"
                  placeholder="Name"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange} // Bind change handler
                  required
                />
                <AiOutlineUser className="absolute left-4 md:left-2 lg:left-1 top-[18px] lg:top-2 text-lg lg:text-2xl text-gray-700" />
              </div>
              <div className="relative w-full">
                <input
                  className="w-full focus:outline-none  py-4 lg:py-2.5 pl-[5.5rem] md:pl-20 xl:pl-[4.5rem] border-b-[1px] md:border-b-0 md:border-r-2 [&::-webkit-inner-spin-button]:appearance-none"                  type="tel"
                  inputMode="numeric"
                  placeholder="58 550 3940"
                  pattern="[0-9]{9}"
                  title="Please enter a 9-digit number" 
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange} // Bind change handler
                  required
                />
                 <p className="absolute left-9 md:left-8 xl:left-7 top-[14.5px] lg:top-[8px] 2xl:top-[8px] chfont font-medium">+971</p>
                <HiOutlineDevicePhoneMobile className="absolute left-4 md:left-2 lg:left-1 top-[19px] lg:top-2 text-lg lg:text-2xl text-gray-700" />
              </div>
              <div className="relative w-full">
                <select
                  className="w-full focus:outline-none py-4 lg:py-2.5 px-10 md:px-9 lg:px-10 appearance-none "
                  name="countryId"
                  value={formData.countryId}
                  onChange={handleChange} // Bind change handler
                  required
                >
                  <option value="">Select a location</option>
                  {countries.map((country) => (
                    <option key={country.countryId} value={country.countryId}>
                      {country.countryName}
                    </option>
                  ))}
                </select>
                <IoLocationOutline className="absolute left-4 md:left-2 lg:left-2 top-[18px] lg:top-2 text-lg lg:text-2xl text-gray-700 pointer-events-none" />
              </div>
            </div>
            <button
              className="bg-visaclr hover:bg-white border border-visaclr hover:text-visaclr py-4 lg:py-2.5 xl:px-4 duration-200 rounded-xl text-white text-base font-PoppinsSemibold"
              type="submit"
            >
              Get started!
            </button>
          </form>
        </section>

        <section className="px-1 md:px-0 w-full h-full">
         
          {/* <div className='flex flex-col gap-3 items-center bg-[#f5f5f5] rounded-[3rem] my-10 px-5 py-14 text-center'>
          <img className='pb-10 w-[709px] h-full object-cover' src={PriceComp} alt="priceimage" />
          <h2 className='text-2xl lg:text-4xl font-PoppinsBold'>Expert Visa Services at Your Fingertips</h2>
          <p className='text-sm lg:text-base'>Choose our experts for a smooth visa process. Get personalized help, avoid mistakes, and increase your chances of approval.</p>
        </div> */}
          <div className="px-1 md:px-0 pt-5">
            <VisaImageCarousal />
          </div>
        </section>


        {/* carousal */}
        <section className="py-20 lg:py-24">
          <TravelCarousal />
        </section>

        {/* <section className="flex flex-col gap-10">
          <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center">
            UAE's Favorite,
            <br className="hidden lg:block" /> Visa Community
          </h1>
          <img
            loading="lazy"
            className="rounded-2xl h-52 lg:h-[25rem] w-full object-cover"
            src={ztartoffice}
            alt="image"
          />
          <div className="bg-[#F2EFEA] px-10 lg:px-0 lg:py-10 grid grid-cols-1 lg:grid-cols-3 rounded-2xl">
            <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-gray-300 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Buddy}
                alt="logo"
                loading="lazy"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Your Visa Buddy
              </h3>
              <p className="text-sm lg:text-base">
                Specialized visa support you can count on.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-gray-300 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Savemoney}
                alt="logo"
                loading="lazy"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Save Your Money
              </h3>
              <p className="text-sm lg:text-base">
                Expert advice to avoid unnecessary expenses.
              </p>
            </div>
            <div className="flex flex-col gap-3 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Solutions}
                alt="logo"
                loading="lazy"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Get Visa Solutions
              </h3>
              <p className="text-sm lg:text-base">
                Strong government connections and deep understanding of global
                visa regulations.
              </p>
            </div>
          </div>
        </section> */}

        {/* <section className='flex flex-col gap-2 py-20 lg:py-32'>
          <h1 className='text-2xl lg:text-4xl font-PoppinsBold text-center lg:text-left'>Check-in to a better deal</h1>
          <p className='text-sm lg:text-base'>Access beautiful hotels across the world with our exclusive discounts</p>
          <BetterDeal/>
          <a className='mt-10 w-full lg:w-fit mx-auto text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full border border-visaclr duration-200 bg-visaclr text-white hover:bg-white hover:text-visaclr' href="#">Explore more</a>
      </section> */}

        {/* <section className='flex flex-col gap-3 pb-20'>
          <h1 className='text-2xl lg:text-4xl font-PoppinsBold text-center'>Caring Guaranteed</h1>
          <p className='text-sm lg:text-base text-center'>With ztartvisa, travel with confidence, clarity, and care. Our triple guarantee covers every aspect of your trip:</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className=' border border-gray-300 rounded-2xl p-5 flex flex-col justify-start gap-3'>
              <img className=' h-24 w-16 object-fill' src={diamondsvg} alt="svg" />
              <h4 className='text-lg font-PoppinsSemibold leading-none'>Book with confidence guarantee</h4>
              <p className='text-sm lg:text-base tracking-wider'>Choose your room, and rest assured it's yours – no surprises. All promised amenities provided, with quick fixes for any issues.</p>
              <Link className='underline capitalize font-PoppinsSemibold'>learn more</Link>
            </div>
            <div className=' border border-gray-300 rounded-2xl p-5 flex flex-col justify-start gap-3'>
              <img className=' h-24 w-16 object-fill' src={sheildsvg} alt="svg" />
              <h4 className='text-lg font-PoppinsSemibold leading-none'>Zero hidden fees guarantee</h4>
              <p className='text-sm lg:text-base tracking-wider'>Because we hate those pesky hidden fees too. Transparent pricing, honest details – that's how we roll. In the rare case any unexpected.</p>
              <Link className='underline capitalize font-PoppinsSemibold'>learn more</Link>
            </div>
            <div className=' border border-gray-300 rounded-2xl p-5 flex flex-col justify-start gap-3'>
              <img className=' h-24 w-16 object-fill' src={heartsvg} alt="svg" />
              <h4 className='text-lg font-PoppinsSemibold leading-none'>Traveler Care guarantee</h4>
              <p className='text-sm lg:text-base tracking-wider'>Our Traveler Care team, accessible 24/7 via email, call, or WhatsApp, offers dedicated support with real-time, thoughtful solutions.</p>
              <Link className='underline capitalize font-PoppinsSemibold'>learn more</Link>
            </div>
          </div>
      </section> */}



        <section className="flex flex-col gap-3 ">
  
          <h2 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center capitalize">
              Your journey with<br/> <span className="text-visaclr">the best visa consultant in Dubai</span>
          </h2>
          {/* <img loading='lazy' className='rounded-2xl h-52 lg:h-[24rem] w-full object-cover mt-3' src={Grp4} alt="image" /> */}
          {/* // add mt-5 when add image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                <h4 className="text-lg lg:text-lg font-PoppinsSemibold">
                  Professional Visa Services
                </h4>
              </span>
              <p className="pl-6 text-base lg:text-base">
              With our expert tourist and business visa services in Dubai, you can easily explore new destinations.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                <h4 className="text-lg lg:text-lg font-PoppinsSemibold">
                  Streamlined Process
                </h4>
              </span>
              <p className="pl-6 text-base lg:text-base">
                We make the visa application process stress-free by offering easy document preparation and quick submission.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                <h4 className="text-lg lg:text-lg font-PoppinsSemibold">
                Expert Guidance
                </h4>
              </span>
              <p className="pl-6 text-base lg:text-base">
              Ztartvisa hndles your visa needs efficiently,  ensuring smooth and timely approvals for both travel and business trips.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden gap-0 pb-10 pt-32">
          <div className="flex-1 md:rounded-l-3xl ">
            <img
              className="hidden lg:block rounded-xl w-full  object-cover h-full"
              loading="Visa assistance in dubai"
              src={ztartnews}
              alt="insta"
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 bg-[#fefce8] p-5 md:rounded-r-3xl ">
            <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-PoppinsExtraBold">
              Ztartvisa: The Smart Choice
            </h1>
            <img
              className="block lg:hidden rounded-xl w-full  object-cover h-full"
              loading="Visa assistance in dubai"
              src={ztartnews}
              alt="insta"
            />
            <p className="text-sm lg:text-base text-justify">
              At Ztartvisa, a leading <b>visa consultant in Dubai</b>, we provide expert
              assistance for your visa application process. Our dedicated team ensures
              accurate and compliant applications for popular destinations such as
              Australia, the UK, Italy, Canada, Switzerland, France, Spain, Turkey, Japan,
              and the USA.We stay updated on the latest visa laws, ensuring swift and
              efficient processing to meet critical deadlines. With continuous support from
              consultation to submission, we guarantee a seamless experience. Trust
              Ztartvisa for excellent visa services in Dubai and let us guide you through
              your journey with confidence!
            </p>
            <a
              className="w-full text-base text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
              href="#"
              target="_blank"
            >
              Learn more
            </a>
          </div>
        </section>

        <section className="pb-10">
          <Testimonial />
        </section>


        <section className="flex flex-col lg:flex-row gap-10  lg:py-16">
          <div className="flex-1 flex items-center text-center lg:text-left lg:items-start flex-col justify-center gap-7">
  
            <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold capitalize">
            Current Visa Trends and Requirements.
            </h1>
            <img
              className="block lg:hidden rounded-xl w-full  object-cover h-full"
              loading="lazy"
              src={InsatProf}
              alt="Visa Consultant in Dubai"
            />
            <p className="text-sm lg:text-base text-justify">
            Visa expertise and your ideal holiday together! The most up to date
              information on tourist visa requirements for 2024 is provided by Ztartvisa,
              your reliable partner for <b>visa services in Dubai</b>. We can assist you whether
              your destination is the UK, USA, Japan, Spain, Turkey, Switzerland, France,
              Italy, Canada, or Australia. Our team of professionals will handle the
              documentation and regulations, making sure your trip is easy. Your ideal
              vacation is only a click away with Ztartvisa.
            </p>
            <a
              className="w-full text-base text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
              href="https://www.instagram.com/ztartvisa?igsh=aGN4anc0bW9obmh5"
              target="_blank"
            >
              Follow us on Instagram
            </a>
        
          </div>
          <div className="flex-1">
            <img
              className="hidden lg:block rounded-xl w-full  object-cover h-full"
              loading="lazy"
              src={InsatProf}
              alt="Visa Consultant in Dubai"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-20">
          <div className="h-full flex flex-col justify-center">
          <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold capitalize text-center xl:text-left">Frequently asked questions?</h1>

          </div>
        <div className="md:col-span-2">
        {LandFAQ.map((dt,i)=>(
            <FAQItem key={i} question={dt.question} answer={dt.answer} />

          ))}
        </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row  overflow-hidden pt-10 pb-20">
          <div className="rounded-b-2xl lg:rounded-b-none lg:rounded-l-3xl flex-1 bg-[#FEFCE8] flex flex-col justify-center p-5 md:p-10 gap-7">
            <h1 className="text-2xl lg:text-4xl capitalize font-PoppinsExtraBold">
              Increase visa chances,
              <br /> not your stress
            </h1>
            <p className="text-sm lg:text-base">
              Get a free consultation and understand the visa application
              process before you apply.
            </p>
            <a
              className="w-full text-base text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full bg-transparent border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
              href="/contact"
            >
              Start with an expert
            </a>
          </div>
          <div className="flex-1">
            <img
              className="w-full md:h-96 lg:h-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-tr-3xl lg:rounded-br-3xl"
              src={relaxImg2}
              alt="isa Agents In Dubai"
              loading="Visa Services In Dubai"
            />
          </div>
        </section>

       

        {/* Go to top */}

        <div className="w-fit mx-auto pb-5 md:pb-0">
          <button
            className="w-fit text-base font-PoppinsMedium px-10 lg:px-8 py-2.5 lg:py-3 flex items-center gap-3 border border-visaclr rounded-full text-visaclr hover:bg-visaclr hover:text-white duration-200"
            onClick={scrollToTop}
          >
            <FaArrowUp />
            <p>Back to top</p>
          </button>
        </div>
      </main>

      {/* <Demo/> */}
    </>
  );
}

export default Homepage;
