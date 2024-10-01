import React,{useEffect,useState} from "react";
import { Helmet } from 'react-helmet';
import { Link, useParams } from "react-router-dom";
import { allvisaData } from "../../components/Constant";
import { HiOutlineDevicePhoneMobile, HiOutlineUsers } from "react-icons/hi2";
import { TfiWallet } from "react-icons/tfi";
import { toast } from "react-toastify";
import { Client1 } from "../../assets";
import { LuAlignVerticalSpaceBetween } from "react-icons/lu";
import { AiOutlineFieldTime, AiOutlineUser } from "react-icons/ai";
import { SlLogin, SlCalender } from "react-icons/sl";
import { PiMinusCircleLight, PiPlusCircleLight } from "react-icons/pi";
import { IoDocumentTextOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineScan } from "react-icons/ai";
import { LuScanFace } from "react-icons/lu";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbReceiptTax } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GoClockFill } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import {FaqData} from '../../components/Constant'
import { IoIosCloseCircleOutline } from "react-icons/io";


const notify = () =>
toast.dark("Application started ✅", {
  position: "bottom-right",
  autoClose: 1000,
  // style:{
  //   background: '#009A92',
  //   color:'white'
  // },
});

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="">
      <div
        className={`flex gap-x-10 md:gap-x-0 py-6 justify-between items-center bg-white border-b last:border-0 pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
        onClick={toggleOpen}
      >
        <div className="font-PoppinsMedium text-sm md:text-base">{question}</div>
        <div
          className={`transform transition-transform ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
         <FiPlus/>
        </div>
      </div>
      <div
        className={`bg-white  overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='p-4 pl-0 text-sm font-PoppinsRegular' >{answer}</p>
      </div>
    </div>
  );
};


function priceCard() {


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

    try {
      const response = await fetch(
        "https://staginglead.accorelab.com/api/Lead/Create/LeadAutoCustomer",
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
            mobileNo: formData.mobileNo,
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


  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://staginglead.accorelab.com/api/Country/List",
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

  
  return (
    
    
    <div className="hidden md:sticky top-24 md:flex flex-col gap-5">
        <div className="mx-0 flex rounded-3xl flex-col gap-5 border p-5 shadow-xl ">
          {/* Ribbon */}
            {/* <div className="w-[calc(100%+80px)] text-white -ml-10 h-20 priceRibbon bg-gradient-to-r from-visaclr to-[#1a4442] rounded-xl relative grid place-items-center">
                <div className="flex items-center gap-3">
                  <div className=""><VscWorkspaceTrusted className="text-5xl"/></div>
                  <div className="flex flex-col text-sm">
                    <span>Visa guaranteed on</span>
                    <span className="font-PoppinsMedium">2 March 2024 at 4:23 PM</span>
                  </div>
                </div>
            </div> */}
          {/* Ribbon */}
          <form  onSubmit={handleSubmit} className="flex flex-col space-y-5 ">
          {/* <h1>Apply now</h1> */}
          <div className="space-y-2">
            <div className="relative w-full">
                <input className="outline-none h-10 w-full rounded-xl p-2 pl-8 border"
                type="text"
                placeholder="Name"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange} // Bind change handler
                required
                />
                <AiOutlineUser className="absolute top-2.5 left-2 text-lg text-gray-700" />
              </div>
              <div className="relative w-full">
                <input className="outline-none h-10 w-full rounded-xl p-2 pl-20 border [&::-webkit-inner-spin-button]:appearance-none"
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
                <p className="absolute top-1.5 left-8 chfont font-medium">+971</p>
                <HiOutlineDevicePhoneMobile className="absolute top-2.5 left-2 text-lg text-gray-700" />
              </div>
              <div className="relative w-full">
              <select className="w-full md:py-2  pl-8 text-base focus:outline-none appearance-none border rounded-xl"
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
             <IoLocationOutline className="absolute top-3 left-2 text-lg text-gray-700" />
              </div>
          </div>
          <button
        
              type="submit"
              className=" text-base bg-[#ffb800] hover:bg-[#f7c545] duration-150 capitalize font-PoppinsMedium rounded-xl shadow-md w-full h-10"
            >
              Start application
            </button>
          </form>
        
        </div>
        {/* <div className="text-white grid grid-cols-4 gap-x-5  bg-gradient-to-r from-visaclr to-[#1a4442] py-5 px-7 rounded-3xl shadow-2xl">
          <div className="grid place-items-center text-center gap-0  ontimegaur  rounded-full h-20 w-20">
            <GoClockFill className="text-lg -mb-7"/>
            <div className="flex flex-col gap-0 uppercase">
              <p className="text-[12px] -mb-1">on time</p>
              <p className="text-[8px]">guarantee</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-center gap-y-1">
            <p className="text-sm font-PoppinsMedium">On Time Guarantee</p>
            <p className="text-xs">Get a 100% refund if we don’t deliver your visa within the promised time frame.</p>
          </div>
        </div> */}
    </div>
  );
}

const VisaInner = () => {
  const [isSticky, setSticky] = useState(false);
  const [isVisaOpen, setVisaOpen] = useState(false);
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const visatogglePopup = () => {
    setVisaOpen(!isVisaOpen);
  };
  
  useEffect(() => {
    // console.log('Decoded Title:', decodedTitle);
  }, [decodedTitle]);

  const visadata = allvisaData.find((s) => s.url === title);
  // console.log(visadata.methods.slice(0,1));
  if (!visadata) {
    return <div>Page not found</div>;
  }

  
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 600);
    };


    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // api

  
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
      setVisaOpen(false)
      console.log("Submission Successful", data);
      // Here you could clear the form or give feedback to the user
    } catch (error) {
      console.error("Submission failed", error);
    }
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

  return (
    <>
      <Helmet>
        <title>{visadata?.metaTitle}</title>
        <meta name="description" content={visadata?.metaDescpt} />
        <link rel="canonical" href={`https://ztartvisa.com/${visadata?.url}`} />
      </Helmet>

      <div className="w-11/12 md:w-11/12 lg:w-9/12 mx-auto h-full flex flex-col md:flex-row gap-y-10 gap-x-10 lg:gap-x-10 py-5 relative">
        {/* left scrll body */}
        <div className="pb-5 md:pb-0 basis-3/6 lg:basis-4/6 flex flex-col gap-5 lg:gap-10">
          <div className="lg:pr-8">
           
          {/* <h1 className="text-2xl font-bold capitalize pb-5">{visadata?.place} Visit Visa Dubai UAE</h1> */}
            <div className="relative overflow-hidden md:rounded-3xl">
              <img
                className="object-cover w-full h-52 md:h-44 object-left-bottom lg:h-full md:rounded-3xl pointer-events-none"
                src={visadata?.Imgs}
                alt={visadata.alttext}
              />
              {/* <div className="hidden md:block visa-effect h-12 lg:h-16 absolute left-0 right-0 bottom-0 text-white  font-PoppinsSemibold text-2xl lg:text-4xl p-3">
                <h1>Apply {visadata.place} Visa</h1>
              </div>
              <div className="pt-5 block md:hidden">
                <h1 className="text-2xl capitalize font-PoppinsSemibold">Apply {visadata.place} Visa</h1>
              </div> */}
            </div>
            <div className="mt-5 flex flex-col gap-10 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h2:text-xl prose-h2:font-PoppinsBold prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc prose-h2:capitalize prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-p:mt-3 prose-ul:mt-3 prose-li:pt-1 prose-a:font-extrabold" dangerouslySetInnerHTML={{ __html: visadata.body1 }}>

          </div>
            <div className="flex gap-3">
              <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr my-3 font-PoppinsSemibold"><Link to="/" >apply now</Link></button>
              <a href="https://api.whatsapp.com/send?phone=971544404197" target="_blank" className="bg-visaclr grid place-items-center text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-green-600 my-3 font-PoppinsSemibold">Whatsapp</a>
            </div>
            <div className="mt-5 flex flex-col gap-10 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h2:text-xl prose-h2:font-PoppinsBold prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc prose-h2:capitalize prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-p:mt-3 prose-ul:mt-3 prose-li:pt-1 prose-a:font-extrabold" dangerouslySetInnerHTML={{ __html: visadata.body }}>

            </div>

            <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr my-3 font-PoppinsSemibold"><Link to="/contact" >contact us</Link></button>
          </div>
          {/*  */}

          {/* <div>

        </div>
          <hr className="w-full h-1" /> */}

          {/* methods */}
          {/* <h2 className="text-xl font-PoppinsBold xl:-mb-8 capitalize">Visa Details.</h2>
          <div className="rounded-2xl border overflow-hidden shadow-lg shadow-gray-200 grid grid-cols-1 lg:grid-cols-2">
            <div className="px-5 py-3 border-b md:border-r flex gap-x-5 items-center">
              <LuAlignVerticalSpaceBetween className="text-xl" />
              <span className="text-sm">
                <p className=" text-gray-600 font-PoppinsMedium">Visa Type</p>
                <p className="underline font-PoppinsMedium">
                  {visadata?.methods.slice(0,1)}
                </p>
              </span>
            </div>
            <div className="px-5 py-3 border-b flex gap-x-5 items-center">
              <AiOutlineFieldTime className="text-2xl" />
              <span className="text-sm">
                <p className=" text-gray-600 font-PoppinsMedium">
                  Validity Period
                </p>
                <p className="underline font-PoppinsMedium">
                  {visadata?.methods.slice(1,2)}
                </p>
              </span>
            </div>
            <div className="px-5 py-3 border-b md:border-r flex gap-x-5 items-center">
              <SlLogin className="text-xl" />
              <span className="text-sm">
                <p className=" text-gray-600 font-PoppinsMedium">Entry</p>
                <p className="underline font-PoppinsMedium">
                  {visadata?.methods.slice(2,3)}
                </p>
              </span>
            </div>
            <div className="px-5 py-3 border-b flex gap-x-5 items-center">
              <SlCalender className="text-xl" />
              <span className="text-sm">
                <p className=" text-gray-600 font-PoppinsMedium">
                  Length of Stay
                </p>
                <p className="underline font-PoppinsMedium">
                  {visadata?.methods.slice(3,4)}
                </p>
              </span>
            </div>
          </div> */}
          {/* hr */}
          {/* <hr className="w-full h-1" />
            <div className="space-y-1">
              <h3 className="text-xl font-PoppinsBold capitalize">{visadata?.place} Visa Application Process</h3>
              <p className="text-base">{visadata?.visaprocess}</p>
            </div> */}
          {/* hr */}
          {/* <hr className="w-full h-1" />

          <div className="xl:-mb-5">
            <h3 className="text-xl font-PoppinsBold  capitalize">Essential Documents for Your {visadata?.place} Visit Visa Dubai UAE Application</h3>
            <p>{visadata?.essentl}</p>
          </div>
          <div className="rounded-2xl border overflow-hidden shadow-lg shadow-gray-200 grid grid-cols-1">
            <div className="px-5 py-4 border-b bg-[#F4F4F4]">
              <span className="flex items-center gap-3">
                <IoDocumentTextOutline className="text-2xl" />
                <p className="text-base font-PoppinsMedium">
                  Documents Required
                </p>
              </span>
            </div>
            <div className="px-5 py-4 flex flex-col gap-5 lg:flex-row flex-wrap lg:items-center text-sm font-PoppinsMedium">
              <span className="flex items-center gap-2">
                <AiOutlineScan className="text-2xl" />
                <p>Passport</p>
              </span>
              <span className="flex items-center gap-2">
                <LuScanFace className="text-2xl" />
                <p>Photo</p>
              </span>
              <span className="flex items-center gap-2">
                <HiOutlineClipboardDocumentList className="text-2xl" />
                <p>Bank Statement</p>
              </span>
              <span className="flex items-center gap-2">
                <TbReceiptTax className="text-2xl" />
                <p>No Objection Certificate (NOC)</p>
              </span>
            </div>
          </div>

          <div>
            {visadata?.documentSteps?.map((data,i)=>(
              <ul className="pb-4 text-base" key={i}>
                <li className=" font-PoppinsSemibold">{data.count}. {data.title}</li>
                <li>{data.desc}</li>
              </ul>
            ))}
          </div>

          <div>
            {visadata?.documentparas?.map((data,i)=>(
              <p className="pb-3" key={i}>{data.para}</p>
            ))}
          </div> */}

          {/* hr */}
          {/* <hr className="w-full h-1" /> */}

          {/* partners */}
          {/* <div>
            <h4 className="text-xl font-PoppinsBold -mt-5">
              Partners we work with...
            </h4>
            <div className="flex flex-wrap overflow-hidden  gap-3 pt-5">


              {visadata?.partners?.length > 0 ? (
                      visadata.partners.map((item) => (
                        // Your mapping logic goes here, rendering content for each item
                        <img
                        className="h-24 w-24 lg:h-32 lg:w-32 p-1 object-contain border border-gray-300 rounded-2xl"
                        src={item?.partner}
                        alt="client"
                      />
                      ))
                    ) : (
                      <img
                      className="h-24 w-24 lg:h-32 lg:w-32 p-1 object-contain border border-gray-300 rounded-2xl"
                      src={Client1}
                      alt="client"
                    />
                    )}

            </div>
          </div> */}

          {/* <hr className="w-full h-1" />
          <div className="space-y-1">
            <h5 className="text-xl font-PoppinsBold capitalize">Why Choose Us for Your {visadata.place} Visa from Dubai UAE?</h5>
            <div>
              {visadata?.whychoosepara?.map((data,i)=>(
                <p key={i} className="pb-3">{data.para}</p>
              ))}
            </div>
           
          </div>

          <hr className="w-full h-1" /> */}

          {/* timeline */}
          {/* <div className="w-full md:w-[70%]">
            <h6 className="text-xl font-PoppinsBold ">
                 How does it work?
            </h6>
           <div className="mt-5 flex flex-col gap-8 border-l-2 border-visaclr">
                {visadata.howItWorks.map((data,i)=>(
                    <div className=" relative pl-5">
                      <div className="absolute -left-[.40rem] top-0 bg-gradient-to-r from-visaclr to-[#1A4543] text-white w-3 h-3 grid place-items-center font-PoppinsSemibold rounded-3xl text-base"></div>
                      <h4 className="text-base capitalize -mt-1 text-gray-600 font-PoppinsBold">{data?.count}</h4>
                      <h4 className="text-base capitalize -mt-1 font-PoppinsSemibold py-1">{data?.title}</h4>
                      <p className="text-sm text-gray-700 font-PoppinsMedium">{data?.desc}</p>
                  </div>
                ))}
           </div>
          </div> */}
          {/* timeline */}


          {/* learn more */}

          {/* <div className="text-sm h-fit text-white w-fit py-5 rounded-2xl px-5 bg-gradient-to-r from-visaclr to-[#1a4442]">
              <p className="pt-0.5">You can learn more about {visadata?.place} visa by reading <span className="underline font-PoppinsSemibold tracking-wider cursor-pointer">here!</span></p>
          </div>

          <hr className="w-full h-1" /> */}

          {/*  */}
          {/* <div className="flex flex-col gap-1">
            <h6 className="text-xl font-PoppinsBold capitalize">Speed Up Your {visadata?.place} Tourist Visa from Dubai with Ztart Visa:</h6>
            <p className="text-base">{visadata?.speedup}</p>
            <Link to={'/about'} className="bg-gradient-to-r from-visaclr to-[#1a4442] xl:hover:scale-105 duration-200 text-white px-5 py-3 rounded-full w-fit mt-3 capitalize">Get your Visa Today</Link>
          </div> */}
          {/*  */}
          {visadata?.faqList?.length > 0 ? (
          <hr className="w-full h-1" />
          ):
          (null)
}
        

          {/* faq */}
          <div className="">
          {visadata?.faqList?.length > 0 ? (
              <h6 className="text-xl font-PoppinsBold">FAQ'S</h6>
          ):
          (null)
}
              <div>
              {visadata?.faqList?.length > 0 ? (
                  visadata.faqList.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))
                ) : (
                  null
                )}
              </div>
            </div>


        
        </div>

        {/* right */}
        <div className="basis-3/6 xl:basis-2/6 relative">
          <div className="hidden md:inline">
          <div className="hidden md:sticky top-24 md:flex flex-col gap-5">
        <div className="mx-0 flex rounded-3xl flex-col gap-5 border p-5 shadow-xl ">
          {/* Ribbon */}
            {/* <div className="w-[calc(100%+80px)] text-white -ml-10 h-20 priceRibbon bg-gradient-to-r from-visaclr to-[#1a4442] rounded-xl relative grid place-items-center">
                <div className="flex items-center gap-3">
                  <div className=""><VscWorkspaceTrusted className="text-5xl"/></div>
                  <div className="flex flex-col text-sm">
                    <span>Visa guaranteed on</span>
                    <span className="font-PoppinsMedium">2 March 2024 at 4:23 PM</span>
                  </div>
                </div>
            </div> */}
          {/* Ribbon */}
          <form  onSubmit={handleSubmit} className="flex flex-col space-y-5 ">
          {/* <h1>Apply now</h1> */}
          <div className="space-y-2">
            <div className="relative w-full">
                <input className="outline-none h-10 w-full rounded-xl p-2 pl-8 border"
                type="text"
                placeholder="Name"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange} // Bind change handler
                required
                />
                <AiOutlineUser className="absolute top-2.5 left-2 text-lg text-gray-700" />
              </div>
              <div className="relative w-full">
                <input className="outline-none h-10 w-full rounded-xl p-2 pl-20 border [&::-webkit-inner-spin-button]:appearance-none"
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
                <p className="absolute top-1.5 left-8 chfont font-medium">+971</p>
                <HiOutlineDevicePhoneMobile className="absolute top-2.5 left-2 text-lg text-gray-700" />
              </div>
              <div className="relative w-full">
              <select className="w-full md:py-2  pl-8 text-base focus:outline-none appearance-none border rounded-xl"
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
             <IoLocationOutline className="absolute top-3 left-2 text-lg text-gray-700" />
              </div>
          </div>
          <button
        
              type="submit"
              className=" text-base bg-[#ffb800] hover:bg-[#f7c545] duration-150 capitalize font-PoppinsMedium rounded-xl shadow-md w-full h-10"
            >
              Start application
            </button>
          </form>
        
        </div>
        {/* <div className="text-white grid grid-cols-4 gap-x-5  bg-gradient-to-r from-visaclr to-[#1a4442] py-5 px-7 rounded-3xl shadow-2xl">
          <div className="grid place-items-center text-center gap-0  ontimegaur  rounded-full h-20 w-20">
            <GoClockFill className="text-lg -mb-7"/>
            <div className="flex flex-col gap-0 uppercase">
              <p className="text-[12px] -mb-1">on time</p>
              <p className="text-[8px]">guarantee</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-center gap-y-1">
            <p className="text-sm font-PoppinsMedium">On Time Guarantee</p>
            <p className="text-xs">Get a 100% refund if we don’t deliver your visa within the promised time frame.</p>
          </div>
        </div> */}
    </div>
          </div>
        </div>
      </div>
        {/* mobile card */}
        <div className={`${isSticky ? "visible" : "hidden"} px-10 bg-white border-2 md:hidden h-20 fixed bottom-0 left-0 right-0 grid grid-cols-1 gap-x-1 place-items-center`}>
              {/* <div className="col-span-3 text-sm font-PoppinsSemibold leading-5">
                <p className="text-gray-500">Visa Guaranteed on</p>
                <p className="">16 February 2024</p>
              </div> */}
              <div className="w-full">
                <button onClick={visatogglePopup} className="bg-[#ffb800] w-full text-white py-3 px-5 rounded-xl capitalize text-sm font-PoppinsMedium">start application</button>
              </div>
        </div>
          {/* get free visa pop up*/}
          {isVisaOpen &&
          <div className="fixed w-full h-screen bg-[#000000a1] backdrop-blur-[2px] top-0 left-0 z-[9999]">
            <div className={`fixed top-[50%] left-[50%] w-[85%] sm:w-[80%] md:w-[60%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-lg z-[9999]`}>
              <IoIosCloseCircleOutline onClick={visatogglePopup} className="text-2xl text-visaclr absolute top-3 right-3"/>
              <div className="w-full h-full p-5 py-10 ">
                <h1 className="text-visaclr font-PoppinsSemibold text-center pb-5 text-lg capitalize">get free visa consultation</h1>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                    <div className="relative">
                      <input
                      className="border border-gray-300 p-2 w-full pl-8 rounded-sm outline-none"
                      type="text"
                      placeholder="Name"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange} // Bind change handler
                      required
                      />
                       <AiOutlineUser className="absolute top-2.5 left-2 text-lg text-gray-700" />
                    </div>
                    <div className="relative">
                      <input
                      className="border border-gray-300 p-2 pl-[75px] w-full rounded-sm outline-none"
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
                        <p className="absolute top-[7px] left-8 chfont font-medium">+971</p>
                       <HiOutlineDevicePhoneMobile className="absolute top-2.5 left-2 text-lg text-gray-700" />
                    </div>
                    <div className="relative">
                    <select className="h-10 w-full pl-8 text-base outline-none border appearance-none"
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
                        <IoLocationOutline className="absolute top-2.5 left-2 text-lg text-gray-700" />
                    </div>
                    <button className="text-center w-full bg-visaclr h-10 text-white rounded-md mt-2" type="submit">Submit</button>
                  </form>
              </div>
          </div>
          </div>
        }
    </>
  );
};

export default VisaInner;
