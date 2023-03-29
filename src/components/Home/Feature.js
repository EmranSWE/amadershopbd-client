import React, { useEffect, useState } from 'react';
import featureImage1 from "../../Assets/Feature/100_Genuine_Products.png";
import featureImage2 from "../../Assets/Feature/Easy_Returns.png";
import featureImage3 from "../../Assets/Feature/EMI_upto_36_Months.png";
import featureImage4 from "../../Assets/Feature/Express_Delivery.png";
import featureImage5 from "../../Assets/Feature/P-Protect.png";
import featureImage6 from "../../Assets/Feature/Secure_Payment.png";
import featureImage7 from "../../Assets/Feature/Temp_Service.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feature = () => {
    const images = [
        featureImage1,
        featureImage2,
        featureImage3
    ]
    const settings = {
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ],
      };
    return (
        <div className='px-10 sm:mx-10 lg:mx-0'>
        <Slider {...settings} className="lg:mx-24">
          <div >
            <img className='w-28' src={featureImage1} alt="" />
            <h1 >100% Genuine Product</h1>
          </div>
          <div className=''>
            <img className='w-28' src={featureImage2} alt="" />
            <h1 >EASY RETURNS</h1>
          </div>
          <div className=''>
            <img className='w-28' src={featureImage3} alt="" />
            <h1 >UP TO 48 MONTH EMI</h1>
          </div>
          <div className=''>
            <img className='w-28' src={featureImage4} alt="" />
            <h1 >3 HOURS DELIVERY</h1>
          </div>
          <div className=''>
            <img className='w-28' src={featureImage5} alt="" />
            <h1 >DISPLAY INSURANCE</h1>
          </div>
          <div className=''>
            <img className='w-28' src={featureImage6} alt="" />
            <h1 >SECURE PAYMENTS</h1>
          </div>
          <div className=''>
            <img className='w-28' src={featureImage7} alt="" />
            <h1 >WARRANTY COVERAGE</h1>
          </div>
        </Slider>
      </div>
    );
};

export default Feature;