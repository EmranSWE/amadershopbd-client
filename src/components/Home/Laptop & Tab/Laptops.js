import React from 'react';
import img from "../../../Assets/mobile1.jpg";
import tv from "../../../Assets/TV.jpg";
import homeAppliance from "../../../Assets/Home_Appliances_2.jpg";
import Slider from "react-slick";
const Laptops = () => {
    const image = [
        { img: tv },
        { img: homeAppliance }
    ]
    const settings = {
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
    };
    return (
        <div className='lg:mx-20'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center text-2xl font-bold'>
                <h1>Electronics & Appliances</h1>
            </div>
            <button className="btn btn-outline btn-info">Button</button>
        </div>
        <div className=''>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="lg:row-span-2 sm:max-w-md lg:mt-10 ">
                <Slider {...settings}>
                    {image.map(prod => (
                        <div>
                            <img className='rounded-lg h-screen ' src={prod.img} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div><img className="w-full" src={img} alt="" /></div>
            <div><img className="w-full" src={img} alt="" /></div>
            <div><img className="w-full" src={img} alt="" /></div>
            <div><img className="w-full" src={img} alt="" /></div>
            <div><img className="w-full" src={img} alt="" /></div>
            <div><img className="w-full" src={img} alt="" /></div>
        </div>
    </div>
    );
};

export default Laptops;