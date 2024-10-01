import {useState,useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";
import {allvisaData} from '../Constant'



const YourCustomPrevArrowComponent = ({ onClick, disabled }) => (
  <div onClick={onClick} className={`${disabled ? 'hidden' : 'arrow1 arrow-left1 shadow-2xl shadow-black '}`}>
    {/* Your custom "previous" arrow content goes here */}
    <FaArrowLeft/>
  </div>
);

const YourCustomNextArrowComponent = ({ onClick, disabled }) => (
  <div onClick={onClick} className={` ${disabled ? 'hidden' : 'arrow1 arrow-right1 shadow-2xl shadow-black'}`}>
    {/* Your custom "next" arrow content goes here */}
    <FaArrowRight/>
  </div>
);

function TravelCarousal() {
  const location = useLocation();

  // Define the path for the landing page
  const landingPagePath = '/visa-consultant-in-dubai';

  const navigate = useNavigate('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastSlideIndex = allvisaData.length - 3;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        swipe: false, // Disable swiping
        draggable: false, // Disable dragging
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        prevArrow: <YourCustomPrevArrowComponent disabled={currentSlide === 0} />,
        nextArrow: <YourCustomNextArrowComponent disabled={currentSlide === lastSlideIndex} />, // Change to your last slide index
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
              infinite: true,
  
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              swipe: true, // Disable swiping
              draggable: true, // Disable dragging
            }
          },
          {
            breakpoint: 480,
            settings: {
              swipe: true, // Disable swiping
              draggable: true, // Disable dragging
              slidesToShow: 1.05,
              slidesToScroll: 1,
              initialSlide: 1,
              centerMode:true,
              centerPadding:'20px',
              arrows:false,
            }
          }
        ]
      };
      let sliders;

  return (
    <>
    <h1 className="pb-3 text-2xl lg:text-4xl font-PoppinsExtraBold text-center px-3 md:px-0">Popular Visas from UAE</h1>
    {location.pathname === landingPagePath ? 
    (
      <p className="pb-10 text-base lg:text-lg  text-center px-3 md:px-0">Explore the top visa options from Dubai.</p>
    ) : (
      <p className="pb-10 text-base lg:text-lg  text-center px-3 md:px-0">Your First Choice for the Most Requested Visas</p>

    ) }
     <Slider ref={(c) => (sliders = c)} {...settings} className="travelaCarousal">
          {allvisaData?.map((data)=>{
            return(
            <div className={`bg-[#DCE1C8] rounded-xl overflow-hidden`} key={data.id}>
                <img onClick={() => navigate(`/visa/${data.url}`)}  loading='eager' className="w-full h-48 sm:h-52 md:h-56 object-left-bottom object-cover cursor-pointer" src={data.Imgs} alt={data.alttext} />

            </div>
            )
          })}
        </Slider>
        <div className='w-full md:w-fit  mx-auto mt-10'>
            <button className='w-full md:w-fit text-base font-PoppinsMedium px-10  lg:px-20 py-4 lg:py-3 capitalize border border-visaclr rounded-full text-visaclr bg-white hover:bg-visaclr hover:text-white duration-200'><p>explore more</p></button>
      </div>
    </>
  )
}

export default TravelCarousal