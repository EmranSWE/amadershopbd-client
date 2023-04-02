import React from 'react';
import bestSellingImg from "../../../Assets/best selling.jpg"
import mobile from "../../../Assets/mobile1.jpg"
import Slider from "react-slick";
import { Link, useLocation } from 'react-router-dom';

const BestSell = () => {
    const {pathname}=useLocation()
    console.log()
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
        {id:2, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},
        {id:3, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},
        {id:4, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},
        {id:5, name:"Oneplus 10 Pro 5G", Price:'18,590', oldprice:"20000",image:mobile},


    ]
    return (
        <div className='lg:mx-20'>
            {/* Best selling Product */}
       {pathname.includes("best-selling") || <div className='flex items-center justify-between'>
        <div className='flex items-center text-2xl font-bold'>
            <img className='w-20' src={bestSellingImg} alt="" />
         <h1>Best Selling Products</h1>   
         </div>
         <Link to="/product/best-selling" className="btn btn-outline btn-info">View All</Link>
        </div>}
        {/* All Products */}
       { pathname.includes("best-selling") || <Slider {...settings} >
       
        {
           bestSelling.map(prod=><div >
            <div className=''>
            <img src={prod.image} alt="" />
            <h1>{prod.name}</h1>
            <h1>{prod.Price}</h1>
            <Link className='px-2 py-2 bg-green-400' to={`/product-details/${prod.id}`}>Buy Now</Link>
            </div>
           </div>) 
        }
        </Slider>}
      

      {pathname.includes("best-selling") && <div className='grid grid-cols-3'>
      {
           bestSelling.map(prod=><div >
            <div className=''>
            <img src={prod.image} alt="" />
            <h1>{prod.name}</h1>
            <h1>{prod.Price}</h1>
            <Link className='px-2 py-2 bg-green-400' to={`/product-details/${prod.id}`}>Buy Now</Link>
            </div>
           </div>) 
        }
      </div>}
        </div>
    );
};

export default BestSell;