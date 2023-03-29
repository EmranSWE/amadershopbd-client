import React from 'react';
import bestSellingImg from "../../../Assets/best selling.jpg"
import mobile from "../../../Assets/mobile1.jpg"
import Slider from "react-slick";

const BestSell = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    const bestSelling = [
        {id:1, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},
        {id:1, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},
        {id:1, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},
        {id:1, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},
        {id:1, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},


    ]
    return (
        <div className='lg:mx-20'>
            {/* Best selling Product */}
        <div className='flex items-center justify-between'>
        <div className='flex items-center text-2xl font-bold'>
            <img className='w-20' src={bestSellingImg} alt="" />
         <h1>Best Selling Products</h1>   
         </div>
         <button className="btn btn-outline btn-info">Button</button>
        </div>

        {/* All Products */}
        <Slider {...settings} >
       
        {
           bestSelling.map(prod=><div >
            <div className=''>
            <img src={prod.image} alt="" />
            <h1>{prod.name}</h1>
            <h1>{prod.Price}</h1>
            </div>
           </div>) 
        }
        </Slider>
      
        </div>
    );
};

export default BestSell;