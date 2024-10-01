import {useState,useEffect} from 'react'
import Slider from "react-slick";
import { Typewriter } from 'react-simple-typewriter'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import {TestimonialData} from '../Constant';
import { useLocation } from 'react-router-dom';

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

function Testimonial() {
  const location = useLocation();

  // Define the path for the landing page
  const landingPagePath = '/visa-consultant-in-dubai';


  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastSlideIndex, setLastSlideIndex] = useState(TestimonialData.length - 3);
    var settings = {
        dots: false,
        infinite: true,
        loop:true,
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
              slidesToShow: 1.05,
              centerMode:true,
              centerPadding:'20px',
              slidesToScroll: 1,
              swipe: true, // Disable swiping
              draggable: true, // Disable dragging
              arrows:false,
   
            }
          }
        ]
      };
      let slider;
  return (
    <>
    {location.pathname === landingPagePath ? 
      (
        <div className='pb-10 text-center space-y-2'>
        <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center px-3 md:px-0 mt-20 capitalize">Our applicants say it all</h1>
        <p className='lg:w-[80%] mx-auto'>Hear directly from those who have experienced our visa services in dubai. Their testimonials highlight our commitment to excellence and the positive impact we've made in simplifying their visa processes.</p>
        </div>
      )
      :
      (
        <>
        <h1 className="pb-10 text-2xl lg:text-4xl font-PoppinsExtraBold text-center px-3 md:px-0 mt-20 capitalize">We've saved our<br/> applicants <Typewriter
    words={['time','money','stress']}
    cursor
    loop
    cursorColor='transparent'
    typeSpeed={100}
    deleteSpeed={100}
    delaySpeed={1000}
    />
    </h1>
        </>
      )  
  }
    
     <Slider ref={(c) => (slider = c)} {...settings} className="TestimonialCarousal">
            {TestimonialData?.map((data,i)=>{
                return(
                <div className="bg-[#dce1c8] p-5 rounded-xl" key={i}>
                    <ImQuotesLeft className="text-3xl text-[#a5a592]"/>
                    <div className="flex flex-col  xs:min-h-[31rem] sm:min-h-[28rem]  lg:min-h-[25rem] justify-between">
                        <p className="text-base py-5 font-PoppinsSemibold">{data.testi}</p>
                        <div className="text-sm capitalize font-PoppinsSemibold">
                            <p className="">{data.name}</p>
                            <p className="font-PoppinsRegular text-xs uppercase">{data.place}</p>
                        </div>
                    </div>
                    
                </div>
                )
            })}
     </Slider>
    </>
  )
}

export default Testimonial