import React from 'react';
import { useParams } from 'react-router-dom';
import mobile from "../../Assets/mobile1.jpg"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addToCart } from '../../redux/actions/productAction';
const ProductDetails = () => {
    const { id } = useParams();
    const bestSelling = [
        { id: 1, name: "Oneplus 10 Pro 5G", Price: '18590', oldprice: "20000", image: mobile },
        { id: 2, name: "Oneplus 10 Pro 5G", Price: '18590', oldprice: "20000", image: mobile },
        { id: 3, name: "Oneplus 10 Pro 5G", Price: '18590', oldprice: "20000", image: mobile },
        { id: 4, name: "Oneplus 10 Pro 5G", Price: '18590', oldprice: "20000", image: mobile },
        { id: 5, name: "Oneplus 10 Pro 5G", Price: '18590', oldprice: "20000", image: mobile },
    ]
    const buyProd = bestSelling.filter(prod => prod.id === +id)[0];


   

    const [count,setCount]=useState(2);
const handleSubmit = ()=>{
    
    const purchase= {
        count,
        price:buyProd.Price
    }
    const totalPrice= count* parseInt(buyProd.Price) 
    console.log(purchase, totalPrice)
}

const state = useSelector(state=> state);

    const dispatch=useDispatch()
    return (
        <div>
            <h1>Product Details:{id}</h1>
            <div className='grid lg:grid-cols-3'>
                <div> <img src={buyProd.image} alt="" />  </div>
                <div className='bg-gray-200 col-span-2'>
                    <h1 className='text-5xl'>{buyProd.name}</h1>
                    <h1>${buyProd.Price}</h1>
                    <h1>Warranty : 12 Months Official Warranty</h1>

                    <h1>Color</h1>
                    <h1>Quantity:
                        <div className="flex">
                        <div className='rounded px-2 py-2 bg-red-300'><button onClick={()=>setCount(count-1)}>-</button> </div>
                            <div className='rounded px-2 py-2 bg-red-300'>{count}</div>
                            <div className='rounded px-2 py-2 bg-red-300'><button onClick={()=>setCount(count+1)}>+</button> </div>
                        </div>
                    </h1>
                    <h1>EMIs from : ৳406.22/month Know More</h1>
                    <h1>More Information</h1>
                    <h1>Brand</h1>
                    <h1>SKU</h1>
                    <h1>Warranty Information</h1>
                    <h1>Emi Available</h1>
                    <h1>Display Size(Inches)</h1>
                    <button className='px-5 py-2 bg-blue-200 rounded'  onClick={() => dispatch(addToCart(buyProd))}>Add to cart</button>
                    <button className='px-5 py-2 bg-blue-200 rounded' onClick={()=>handleSubmit()}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;